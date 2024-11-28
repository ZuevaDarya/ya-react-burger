import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SliceNamespace } from '../constants/slice-namespace';
import { BASE_URL, API_PATHS } from '../constants/api-constants';
import { BurgerIngredientsStateType } from '../types/services-types';

export const getIngredients = createAsyncThunk(
  `${SliceNamespace.BurgerIngredients}/getIngredients`,
  async () => {
    return await fetch(`${BASE_URL}${API_PATHS.ingredients}`).then(res => res.json());
  }
);

const initialState: BurgerIngredientsStateType = {
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

