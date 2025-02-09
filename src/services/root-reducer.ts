import { combineReducers } from "redux";
import burgerIngredientsReducer from "./slices/burger-ingredients-slice";
import constructorIngredientsReducer from "./slices/constructor-ingredients-slice";
import feedOrdersReducer from "./slices/feed-orders-slice";
import ingredientDetailsReducer from "./slices/ingredient-details-slice";
import orderDetailsReducer from "./slices/order-details-slice";
import profileOrdersReducer from "./slices/profile-orders-slice";
import resetPasswordReducer from "./slices/reset-password-slice";
import userReducer from "./slices/user-slice";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  userInfo: userReducer,
  resetPassword: resetPasswordReducer,
  feedOrders: feedOrdersReducer,
  profileOrders: profileOrdersReducer,
});
