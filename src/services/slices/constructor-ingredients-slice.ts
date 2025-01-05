import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredientsState, TIngredientConstructorSlice, TSwapIngredientAction } from '../../types/services-types';
import { SliceNamespace } from '../../constants/slice-namespace';
import { TIngredient } from '../../types/types';
import uuid from 'react-uuid';

const initialState: TConstructorIngredientsState = {
  ingredients: [],
  bun: null
};

const constructorIngredientsSlice = createSlice({
  name: SliceNamespace.ConstructorIngredients,
  initialState,
  reducers: {
    addIngredientInConstructor: {
      reducer: (state, { payload }: PayloadAction<TIngredientConstructorSlice>) => {
        state.ingredients.push(payload);
      },
      prepare: (ingredient: TIngredient) => {
        return { payload: { ingredient, uuid: uuid() } };
      }
    },
    addBunInConstrucor: (state, { payload }: PayloadAction<TIngredient>) => {
      state.bun = payload;
    },
    removeIngredientFromConstructor: (state, { payload }: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(({ uuid }) => uuid !== payload);
    },
    clearConstructor: (state) => {
      state.ingredients = [];
      state.bun = null;
    },
    swapIngredients: (state, { payload }: PayloadAction<TSwapIngredientAction>) => {
      const [movedIngredients] = state.ingredients.splice(payload.fromIndex, 1);
      state.ingredients.splice(payload.toIndex, 0, movedIngredients);
    }
  }
});

export const {
  addIngredientInConstructor,
  addBunInConstrucor,
  removeIngredientFromConstructor,
  clearConstructor,
  swapIngredients
} = constructorIngredientsSlice.actions;

export default constructorIngredientsSlice.reducer;
