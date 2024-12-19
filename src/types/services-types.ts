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
  number: number;
};

export type OrderdetailsStateType = {
  order: OrderType | null;
  isRequest: boolean;
  isSuccess: boolean;
}

export type PreloadedStateType = {
  burgerIngredients: BurgerIngredientsStateType;
  constructorIngredients: ConstructorIngredientsStateType;
  ingredientDetails: IngredientDetailsType;
  orderDetails: OrderdetailsStateType;
  userInfo: UserStateType;
};

export type OrderResponeType = {
  name: string;
  order: {
    number: number;
  }
  success: boolean;
};

export type SwapIngredientActionType = {
  toIndex: number; 
  fromIndex: number;
};

export type UserType = {
  name: string;
  email: string;
};

export type UserStateType = {
  user: UserType | null;
  isRequest: boolean;
  isSuccess: boolean;
  error: string | null;
};

export type RegisterResponseType = {
  success: boolean;
  user: UserType;
  accessToken: string;
  refreshToken: string;
};

export type LoginResponseType = RegisterResponseType;

export type LogoutResponseType = {
  success: boolean;
  message: string;
};

export type UpdateTokenResponseType = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type UpdateUserResponseType = Omit<RegisterResponseType, "accessToken" | "refreshToken"> ;

export type GetUserResponseType = {
  user: UserType;
  success: boolean;
};

export type ErrorResponseType = {
  success: boolean;
  message: string;
};
