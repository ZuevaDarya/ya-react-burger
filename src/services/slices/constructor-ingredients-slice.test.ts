import uuid from "react-uuid";
import { MOCK_BUN, MOCK_INGREDIENT } from "../../utils/test-data/burger-ingredients";
import reducer, {
  addBunInConstrucor,
  addIngredientInConstructor,
  clearConstructor,
  initialState,
  removeIngredientFromConstructor,
  swapIngredients,
} from "./constructor-ingredients-slice";

describe("constructor-ingredients-slice reducer", () => {
  const mockConstructorIngredient01 = { ingredient: MOCK_INGREDIENT, uuid: uuid() };
  const mockConstructorIngredient02 = { ingredient: MOCK_INGREDIENT, uuid: uuid() };
  const mockConstructorIngredient03 = { ingredient: MOCK_INGREDIENT, uuid: uuid() };

  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  describe("addIngredientInConstructor action", () => {
    it("should add uuid to the ingredient with addIngredientInConstructor action", () => {
      const state = reducer(initialState, addIngredientInConstructor(MOCK_INGREDIENT));
      const addedIngredient = state.ingredients[state.ingredients.length - 1];
      expect(addedIngredient).toHaveProperty("uuid");
    });

    it("should correctly update state with addIngredientInConstructor action", () => {
      const state = reducer(initialState, addIngredientInConstructor(MOCK_INGREDIENT));
      const constructorIngredient = {
        ingredient: MOCK_INGREDIENT,
        uuid: state.ingredients[state.ingredients.length - 1].uuid,
      };

      expect(state).toEqual({
        ...initialState,
        ingredients: [...initialState.ingredients, constructorIngredient],
      });
    });
  });

  it("should correctly update state with addBunInConstrucor action", () => {
    const state = reducer(initialState, addBunInConstrucor(MOCK_BUN));
    expect(state).toEqual({ ...initialState, bun: MOCK_BUN });
  });

  it("should correctly update state with removeIngredientFromConstructor action", () => {
    const mockInitialState = {
      ...initialState,
      ingredients: [
        mockConstructorIngredient01,
        mockConstructorIngredient02,
        mockConstructorIngredient03,
      ],
    };
    const mockResult = {
      ...initialState,
      ingredients: [mockConstructorIngredient01, mockConstructorIngredient03],
    };

    const state = reducer(
      mockInitialState,
      removeIngredientFromConstructor(mockConstructorIngredient02.uuid)
    );

    expect(state).toEqual(mockResult);
  });

  it("should correctly reset state with clearConstructor action", () => {
    const mockInitialState = {
      ...initialState,
      ingredients: [mockConstructorIngredient01, mockConstructorIngredient02],
      bun: MOCK_BUN,
    };

    const state = reducer(mockInitialState, clearConstructor());
    expect(state).toEqual(initialState);
  });

  it("should correctly update state with swapIngredients action", () => {
    const mockInitialState = {
      ...initialState,
      ingredients: [
        mockConstructorIngredient01,
        mockConstructorIngredient02,
        mockConstructorIngredient03,
      ],
    };
    const mockResult = {
      ...initialState,
      ingredients: [
        mockConstructorIngredient02,
        mockConstructorIngredient01,
        mockConstructorIngredient03,
      ],
    };

    const state = reducer(mockInitialState, swapIngredients({ toIndex: 0, fromIndex: 1 }));
    expect(state).toEqual(mockResult);
  });
});
