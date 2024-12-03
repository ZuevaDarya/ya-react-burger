import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_PATHS } from '../constants/api-constants';
import { SliceNamespace } from '../constants/slice-namespace';
import { IngredientType } from '../types/types';
import { OrderResponeType } from '../types/services-types';

export const getIngredients = createAsyncThunk<{ data: IngredientType[] }>(
  `${SliceNamespace.BurgerIngredients}/getIngredients`,
  async () => {
    return await fetch(`${BASE_URL}${API_PATHS.ingredients}`)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
);

export const createOrder = createAsyncThunk<OrderResponeType, string[]>(
  `${SliceNamespace.OrderDetails}/createOrder`,
  async (ingredientsIds) => {
    return await fetch(`${BASE_URL}${API_PATHS.orders}`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          ingredients: ingredientsIds,
        }),
      })
      .then(res => res.json())
      .catch(err => console.log(err));
  }
);
