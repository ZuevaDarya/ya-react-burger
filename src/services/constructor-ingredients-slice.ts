import { createSlice } from '@reduxjs/toolkit';
import { ConstructorIngredientsStateType } from '../types/services-types';
import { SliceNamespace } from '../constants/slice-namespace';

const initialState: ConstructorIngredientsStateType = {
  ingredients: []
};

const constructorIngredientsSlice = createSlice({
  name: SliceNamespace.ConstructorIngredients,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
});

export default constructorIngredientsSlice.reducer;
