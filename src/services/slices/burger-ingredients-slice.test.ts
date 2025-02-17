import { MOCK_INGREDIENTS } from "../../utils/test-data/burger-ingredients";
import { getIngredients } from "../thunks";
import reducer, { addMapIngredients, initialState } from "./burger-ingredients-slice";

describe("burger-ingredients-slice reducer", () => {
  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should correctly update state with addMapIngredients action", () => {
    const mockMapIngredients = new Map();
    MOCK_INGREDIENTS.forEach(({ _id, ...otherProp }) => mockMapIngredients.set(_id, otherProp));

    const state = reducer(initialState, addMapIngredients(MOCK_INGREDIENTS));

    expect(state).toEqual({
      ...initialState,
      mapIngredients: mockMapIngredients,
    });
  });

  describe("getIngredients action", () => {
    it("should correctly update state with pending getIngredients action", () => {
      const state = reducer(initialState, { type: getIngredients.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
      });
    });

    it("should correctly update state with fulfilled getIngredients action", () => {
      const state = reducer(initialState, {
        type: getIngredients.fulfilled.type,
        payload: { data: MOCK_INGREDIENTS },
      });

      expect(state).toEqual({
        ...initialState,
        ingredients: MOCK_INGREDIENTS,
        isRequest: false,
        isSuccess: true,
      });
    });

    it("should correctly update state with rejected getIngredients action", () => {
      const state = reducer(initialState, { type: getIngredients.rejected.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
      });
    });
  });
});
