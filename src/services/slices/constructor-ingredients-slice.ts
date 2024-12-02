import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConstructorIngredientsStateType } from '../../types/services-types';
import { SliceNamespace } from '../../constants/slice-namespace';
import { IngredientsType } from '../../constants/ingredients-type';
import { IngredientType } from '../../types/types';
import uuid from 'react-uuid';

const initialState: ConstructorIngredientsStateType = {
  ingredients: [],
  bun: null
};

const constructorIngredientsSlice = createSlice({
  name: SliceNamespace.ConstructorIngredients,
  initialState,
  reducers: {
    addIngredientInConstructor: (state, { payload }: PayloadAction<IngredientType>) => {
      if (payload.type === IngredientsType.Bun) {
        state.bun = payload;
      } else {
        state.ingredients.push({ uuid: uuid(), ingredient: payload });
      }
    },
    removeIngredientFromConstructor: (state, { payload }: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(({ uuid }) => uuid !== payload);
    },
  }
});

export const {
  addIngredientInConstructor,
  removeIngredientFromConstructor
} = constructorIngredientsSlice.actions;

export default constructorIngredientsSlice.reducer;
