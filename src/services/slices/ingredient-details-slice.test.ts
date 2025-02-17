import { MOCK_INGREDIENT } from "../../utils/test-data/burger-ingredients";
import reducer, {
  addCurrentIngredient,
  initialState,
  removeCurrentIngredient,
} from "./ingredient-details-slice";

describe("ingredient-details-slice reducer", () => {
  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should correctly update state with addCurrentIngredient action", () => {
    const state = reducer(initialState, addCurrentIngredient(MOCK_INGREDIENT));
    expect(state).toEqual({ ...initialState, currentIngredient: MOCK_INGREDIENT });
  });

  it("should correctly update state with removeCurrentIngredient action", () => {
    const mockInitialState = {
      ...initialState,
      currentIngredient: MOCK_INGREDIENT,
    };

    const state = reducer(mockInitialState, removeCurrentIngredient());
    expect(state).toEqual(initialState);
  });
});
