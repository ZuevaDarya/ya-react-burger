import { combineReducers } from 'redux';
import burgerIngredientsReducer from './slices/burger-ingredients-slice';
import constructorIngredientsReducer from './slices/constructor-ingredients-slice';
import ingredientDetailsReducer from './slices/ingredient-details-slice';
import orderDetailsReducer from './slices/order-details-slice';
import userReducer from './slices/user-slice';
import resetPasswordReducer from './slices/reset-password-slice';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  userInfo: userReducer,
  resetPassword: resetPasswordReducer
});
