import { TIngredient } from './types';

export type TProcessRequest = {
  isRequest: boolean;
  isSuccess: boolean;
};

export type TBurgerIngredientsState = TProcessRequest & {
  ingredients: TIngredient[];
};

export type TIngredientConstructorSlice = {
  uuid: string;
  ingredient: TIngredient;
};

export type TConstructorIngredientsState = {
  ingredients: TIngredientConstructorSlice[];
  bun: TIngredient | null;
};

export type TIngredientDetailsState = {
  currentIngredient: TIngredient | null;
};

export type TOrder = {
  name: string;
  number: number;
};

export type TOrderdetailsState = TProcessRequest & {
  order: TOrder | null;
};

export type TPreloadedState = {
  burgerIngredients: TBurgerIngredientsState;
  constructorIngredients: TConstructorIngredientsState;
  ingredientDetails: TIngredientDetailsState;
  orderDetails: TOrderdetailsState;
  userInfo: TUserState;
  resetPassword: TResetPasswordState;
};

export type TOrderRespone = {
  name: string;
  order: {
    number: number;
  }
  success: boolean;
};

export type TSwapIngredientAction = {
  toIndex: number;
  fromIndex: number;
};

export type TUser = {
  name: string;
  email: string;
};

export type TUserState = TProcessRequest & {
  user: TUser | null;
  error: string | null;
  isLogoutRequest: boolean;
};

export type TResponseWithTokens = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type TRegisterResponse = TResponseWithTokens & {
  user: TUser;
};

export type TLoginResponse = TRegisterResponse;

export type TLogoutResponse = {
  success: boolean;
  message: string;
};

export type TUpdateTokenResponse = TResponseWithTokens;

export type TUpdateUserResponse = {
  user: TUser;
  success: boolean;
};

export type TGetUserResponse = TUpdateUserResponse;

export type TErrorResponse = {
  success: boolean;
  message: string;
};

export type TResetPasswordState = TProcessRequest & {
  message: string | null;
  error: string | null;
};

export type TResetPasswordResponse = TErrorResponse;
