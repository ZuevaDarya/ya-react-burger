import { IngredientType } from './types';

export type BurgerIngredientsStateType = {
  ingredients: IngredientType[],
  isRequest: boolean,
  isSuccess: boolean
}

export type ConstructorIngredientsStateType = {
  ingredients: IngredientType[];
}

export type IngredientDetailsType = {
  currentIngredient: IngredientType | null;
}

export type OrderType = {
  name: string;
  order: { number: number };
  success: boolean;
};

export type OrderdetailsStateType = {
  order: OrderType | null;
}

export type PreloadedStateType = {
  burgerIngredients: BurgerIngredientsStateType;
  constructorIngredients: ConstructorIngredientsStateType;
  ingredientDetails: IngredientDetailsType;
  orderDetails: OrderdetailsStateType;
};
