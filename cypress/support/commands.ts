/// <reference types="cypress" />

import { MOCK_REQUEST_PATHS, MOCK_TOKENS } from "./constants/constants";
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      dragAndDrop(testId: string, dropContainer: string): Chainable<void>;
      preloadData(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("dragAndDrop", (testId, dropContainer) => {
  cy.get(testId).trigger("dragstart");
  cy.get(dropContainer).trigger("drop");
  cy.get(dropContainer).trigger("dragend");
});

Cypress.Commands.add("preloadData", () => {
  cy.visit("/");

  window.localStorage.setItem("accessToken", MOCK_TOKENS.accesToken);
  window.localStorage.setItem("refreshToken", MOCK_TOKENS.refreshToken);

  cy.intercept("GET", MOCK_REQUEST_PATHS.getIngredients, { fixture: "ingredients.json" }).as(
    "getIngredients"
  );
  cy.intercept("GET", MOCK_REQUEST_PATHS.getUser, { fixture: "user.json" }).as("getUser");
  cy.intercept("POST", MOCK_REQUEST_PATHS.createOrder, { fixture: "order.json" }).as("createOrder");

  cy.url().should("include", "/");

  cy.wait("@getIngredients");
  cy.wait("@getUser");
});
