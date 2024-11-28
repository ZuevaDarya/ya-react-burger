import { combineReducers } from 'redux';
import burgerIngredientsReducer from './burger-ingredients-slice';
import constructorIngredientsReducer from './constructor-ingredients-slice';
import ingredientDetailsReducer from './ingredient-details-slice';
import orderDetailsReducer from './order-details-slice';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer
});
