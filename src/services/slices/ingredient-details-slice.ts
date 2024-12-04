import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNamespace } from '../../constants/slice-namespace';
import { IngredientDetailsType } from '../../types/services-types';
import { IngredientType } from '../../types/types';

const initialState: IngredientDetailsType = {
  currentIngredient: null,
};

const ingredientDetailsSlice = createSlice({
  name: SliceNamespace.IngredientDetails,
  initialState,
  reducers: {
    addCurrentIngredient: (state, action: PayloadAction<IngredientType>) => {
      state.currentIngredient = action.payload;
    },
    removeCurrentIngredient: (state) => {
      state.currentIngredient = null;
    }
  },
});

export const { addCurrentIngredient, removeCurrentIngredient } = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
