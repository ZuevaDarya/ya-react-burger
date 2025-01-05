import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNamespace } from '../../constants/slice-namespace';
import { TIngredientDetailsState } from '../../types/services-types';
import { TIngredient } from '../../types/types';

const initialState: TIngredientDetailsState = {
  currentIngredient: null,
};

const ingredientDetailsSlice = createSlice({
  name: SliceNamespace.IngredientDetails,
  initialState,
  reducers: {
    addCurrentIngredient: (state, action: PayloadAction<TIngredient>) => {
      state.currentIngredient = action.payload;
    },
    removeCurrentIngredient: (state) => {
      state.currentIngredient = null;
    }
  },
});

export const { addCurrentIngredient, removeCurrentIngredient } = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
