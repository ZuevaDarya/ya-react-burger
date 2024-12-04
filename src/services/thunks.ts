import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_PATHS } from '../constants/api-constants';
import { SliceNamespace } from '../constants/slice-namespace';
import { IngredientType } from '../types/types';
import { OrderResponeType } from '../types/services-types';
import request from '../utils/functions/request';

export const getIngredients = createAsyncThunk<{ data: IngredientType[] }>(
  `${SliceNamespace.BurgerIngredients}/getIngredients`,
  async () => {
    return await request(API_PATHS.ingredients);
  }
);

export const createOrder = createAsyncThunk<OrderResponeType, string[]>(
  `${SliceNamespace.OrderDetails}/createOrder`,
  async (ingredientsIds) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ingredients: ingredientsIds,
      }),
    };

    return await request(API_PATHS.orders, options);
  }
);
