import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { PreloadedStateType } from '../types/services-types';
import { rootReducer } from './root-reducer';

const preloadedState: PreloadedStateType = {
  burgerIngredients: {
    ingredients: [],
    isRequest: false,
    isSuccess: false
  },
  constructorIngredients: {
    ingredients: [],
    bun: null
  },
  ingredientDetails: {
    currentIngredient: null
  },
  orderDetails: {
    order: null,
    isRequest: false,
    isSuccess: false
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
