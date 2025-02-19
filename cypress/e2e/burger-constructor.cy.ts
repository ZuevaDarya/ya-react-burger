import { INGREDIENT_TYPES } from "../support/constants/constants";
import { DATA_SELECTORS } from "../support/constants/data-selectors";

describe("testing dragging ingredients into the constructor", () => {
  beforeEach(() => {
    cy.preloadData();
  });

  it("should add two buns when dragging one bun and increase the counter by 2", () => {
    const bunTestId = `[data-testid=${INGREDIENT_TYPES.bun}-0]`;

    cy.get(bunTestId).should("be.visible");
    cy.dragAndDrop(bunTestId, DATA_SELECTORS.dropContainer);
    cy.get(bunTestId)
      .find(DATA_SELECTORS.ingredientName)
      .then(($name) => {
        cy.get(DATA_SELECTORS.dropContainer).contains(`${$name.text()} (верх)`);
        cy.get(DATA_SELECTORS.dropContainer).contains(`${$name.text()} (низ)`);
      });

    cy.get(bunTestId).find(".counter").contains(2);
  });

  it("should add different ingredients", () => {
    const sauceTestId = `[data-testid=${INGREDIENT_TYPES.sauce}-2]`;
    const mainTestId = `[data-testid=${INGREDIENT_TYPES.main}-3]`;

    cy.get(sauceTestId).scrollIntoView().should("be.visible");
    cy.dragAndDrop(sauceTestId, DATA_SELECTORS.dropContainer);

    cy.get(mainTestId).scrollIntoView().should("be.visible");
    cy.dragAndDrop(mainTestId, DATA_SELECTORS.dropContainer);

    cy.get(sauceTestId)
      .find(DATA_SELECTORS.ingredientName)
      .then(($name) => {
        cy.get(DATA_SELECTORS.dropContainer).contains($name.text());
      });

    cy.get(mainTestId)
      .find(DATA_SELECTORS.ingredientName)
      .then(($name) => {
        cy.get(DATA_SELECTORS.dropContainer).contains($name.text());
      });
  });

  it("should add the same ingredients and increase the counter by ingredients number", () => {
    const mainTestId = `[data-testid=${INGREDIENT_TYPES.main}-1]`;
    const numIngredients = 5;
    const arr = Array.from({ length: numIngredients });

    cy.get(mainTestId).scrollIntoView().should("be.visible");

    cy.wrap(arr).each(() => {
      cy.dragAndDrop(mainTestId, DATA_SELECTORS.dropContainer);
    });

    cy.get(mainTestId)
      .find(DATA_SELECTORS.ingredientName)
      .then(($name) => {
        cy.get(DATA_SELECTORS.dropContainer).contains($name.text());
      });

    cy.get(mainTestId).find(".counter").contains(numIngredients);
  });
});

describe("testing close/open ingredient modal", () => {
  const sauceTestId = `[data-testid=${INGREDIENT_TYPES.sauce}-0]`;

  beforeEach(() => {
    cy.preloadData();
  });

  it("should open modal when click on ingredient and contains current ingredient details", () => {
    cy.get(sauceTestId).scrollIntoView().should("be.visible").click();
    cy.get("body").find(DATA_SELECTORS.modal).as("modal");

    cy.get(sauceTestId)
      .find(DATA_SELECTORS.ingredientName)
      .then(($name) => {
        cy.get("@modal").contains("Детали ингредиента");
        cy.get("@modal").contains($name.text());
      });
  });

  it("should close modal when click on button", () => {
    cy.get(sauceTestId).scrollIntoView().should("be.visible").click();
    cy.get(DATA_SELECTORS.modal).find(DATA_SELECTORS.closeModalBtn).click();
    cy.get(DATA_SELECTORS.modal).should("not.exist");
  });

  it("should close modal when click on overlay", () => {
    cy.get(sauceTestId).scrollIntoView().should("be.visible").click();
    cy.get(DATA_SELECTORS.modalOverlay).click({ force: true });
    cy.get(DATA_SELECTORS.modal).should("not.exist");
  });

  it("should close modal when press ESC", () => {
    cy.get(sauceTestId).scrollIntoView().should("be.visible").click();
    cy.get("body").type("{esc}");
    cy.get(DATA_SELECTORS.modal).should("not.exist");
  });
});

describe("testing process work of the order modal", () => {
  const bunTestId = `[data-testid=${INGREDIENT_TYPES.bun}-0]`;
  const sauceTestId = `[data-testid=${INGREDIENT_TYPES.sauce}-0]`;
  const mainTestId = `[data-testid=${INGREDIENT_TYPES.main}-1]`;
  const toppingTestId = `[data-testid=${INGREDIENT_TYPES.main}-4]`;

  beforeEach(() => {
    cy.preloadData();
  });

  it("should be disabled checkout button if ingredients are not added to constructor", () => {
    cy.get(DATA_SELECTORS.submitOrderBtn).should("be.disabled");
  });

  it("should be enabled checkout button if ingredients added to constructor", () => {
    cy.get(bunTestId).should("be.visible");
    cy.dragAndDrop(bunTestId, DATA_SELECTORS.dropContainer);
    cy.get(DATA_SELECTORS.submitOrderBtn).should("be.enabled");
  });

  it("should correctly placed order", () => {
    cy.dragAndDrop(bunTestId, DATA_SELECTORS.dropContainer);
    cy.dragAndDrop(sauceTestId, DATA_SELECTORS.dropContainer);
    cy.dragAndDrop(mainTestId, DATA_SELECTORS.dropContainer);
    cy.dragAndDrop(toppingTestId, DATA_SELECTORS.dropContainer);
    cy.dragAndDrop(toppingTestId, DATA_SELECTORS.dropContainer);

    cy.get(DATA_SELECTORS.submitOrderBtn).click();
    cy.wait("@createOrder");

    cy.get("body").find(DATA_SELECTORS.modal).as("modal");
    cy.get("@modal").find(DATA_SELECTORS.orderNumber).contains(68837);

    cy.get(DATA_SELECTORS.closeModalBtn).click();
    cy.get("@modal").should("not.exist");
  });
});
