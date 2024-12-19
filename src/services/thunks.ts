import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_PATHS } from '../constants/api-constants';
import { SliceNamespace } from '../constants/slice-namespace';
import {
  IngredientType,
  LoginFormType,
  ProfileFormType,
  RegistrationFormType
} from '../types/types';
import {
  GetUserResponseType,
  LoginResponseType,
  LogoutResponseType,
  OrderResponeType,
  RegisterResponseType,
  UpdateTokenResponseType,
  UpdateUserResponseType
} from '../types/services-types';
import request from '../utils/functions/request';
import { localStorageKey } from '../constants/local-storage-key';

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

export const register = createAsyncThunk<RegisterResponseType, RegistrationFormType>(
  `${SliceNamespace.User}/register`,
  async (data) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.register, options);
  }
);

export const login = createAsyncThunk<LoginResponseType, LoginFormType>(
  `${SliceNamespace.User}/login`,
  async (data) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.login, options);
  }
);

export const logout = createAsyncThunk<LogoutResponseType>(
  `${SliceNamespace.User}/logout`,
  async () => {
    const refreshToken = localStorage.getItem(localStorageKey.RefreshToken);

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: refreshToken || "" }),
    };

    return await request(API_PATHS.logout, options);
  }
);

export const updateToken = createAsyncThunk<UpdateTokenResponseType>(
  `${SliceNamespace.User}/updateToken`,
  async () => {
    const refreshToken = localStorage.getItem(localStorageKey.RefreshToken);

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: refreshToken }),
    };

    return await request(API_PATHS.token, options);
  }
);

export const updateUser = createAsyncThunk<UpdateUserResponseType, ProfileFormType>(
  `${SliceNamespace.User}/updateUser`,
  async (data) => {
    const accessToken = localStorage.getItem(localStorageKey.AccessToken);

    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + accessToken || "",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.user, options);
  }
);

export const getUser = createAsyncThunk<GetUserResponseType>(
  `${SliceNamespace.User}/getUser`,
  async () => {
    const accessToken = localStorage.getItem(localStorageKey.AccessToken);
    const options = {
      headers: {
        "Authorization": "Bearer " + accessToken || "",
      },
    };

    return await request(API_PATHS.user, options);
  }
);
