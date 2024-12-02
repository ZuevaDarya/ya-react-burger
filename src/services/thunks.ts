import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_PATHS } from '../constants/api-constants';
import { SliceNamespace } from '../constants/slice-namespace';

export const getIngredients = createAsyncThunk(
  `${SliceNamespace.BurgerIngredients}/getIngredients`,
  async () => {
    return await fetch(`${BASE_URL}${API_PATHS.ingredients}`).then(res => res.json());
  }
);
