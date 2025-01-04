import { createSlice } from '@reduxjs/toolkit';
import { SliceNamespace } from '../../constants/slice-namespace';
import { TBurgerIngredientsState } from '../../types/services-types';
import { getIngredients } from '../thunks';

const initialState: TBurgerIngredientsState = {
  ingredients: [],
  isRequest: false,
  isSuccess: false
};

const BurgerIngredientsSlice = createSlice({
  name: SliceNamespace.BurgerIngredients,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload.data;
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(getIngredients.rejected, (state) => {
        state.isRequest = false;
        state.isSuccess = false;
      });
  }
});

export default BurgerIngredientsSlice.reducer;

