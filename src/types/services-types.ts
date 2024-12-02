import { IngredientType } from './types';

export type BurgerIngredientsStateType = {
  ingredients: IngredientType[],
  isRequest: boolean,
  isSuccess: boolean
}

export type IngredientConstructorSliceType = {
  uuid: string;
  ingredient: IngredientType;
}

export type ConstructorIngredientsStateType = {
  ingredients: IngredientConstructorSliceType[];
  bun: IngredientType | null;
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
