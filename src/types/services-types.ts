import { WSStatus } from "../constants/ws-status";
import { TIngredient } from "./types";

export type TProcessRequest = {
  isRequest: boolean;
  isSuccess: boolean;
};

export type TMapIngredient = Omit<TIngredient, "_id">;

export type TMapIngredients = {
  mapIngredients: Map<string, TMapIngredient>;
};

export type TBurgerIngredientsState = TProcessRequest &
  TMapIngredients & {
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
  orderCard: TFeedOrder | null;
};

export type TPreloadedState = {
  burgerIngredients: TBurgerIngredientsState;
  constructorIngredients: TConstructorIngredientsState;
  ingredientDetails: TIngredientDetailsState;
  orderDetails: TOrderdetailsState;
  userInfo: TUserState;
  resetPassword: TResetPasswordState;
  feedOrders: TFeedOrdersState;
  profileOrders: TProfileOrdersState;
};

export type TOrderRespone = {
  name: string;
  order: {
    number: number;
  };
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

export type TFeedOrder = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type TFeedOrdersState = Omit<TWSGetMessage, "success"> & {
  status: WSStatus;
  connectionError: string | null;
};

export type TWSGetMessage = {
  success: boolean;
  orders: TFeedOrder[];
  total: number;
  totalToday: number;
};

export type TProfileOrdersState = Pick<
  TFeedOrdersState,
  "orders" | "status" | "connectionError"
>;

export type TGetOrderResponse = Pick<TWSGetMessage, "success" | "orders">;
