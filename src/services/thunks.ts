import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_PATHS } from '../constants/api-constants';
import { SliceNamespace } from '../constants/slice-namespace';
import {
  ForgotPasswordFormType,
  IngredientType,
  LoginFormType,
  ProfileFormType,
  RegistrationFormType,
  ResetPasswordFormType
} from '../types/types';
import {
  GetUserResponseType,
  LoginResponseType,
  LogoutResponseType,
  OrderResponeType,
  RegisterResponseType,
  ResetPasswordResponseType,
  UpdateUserResponseType
} from '../types/services-types';
import { request, requestWithRefresh } from '../utils/functions/request';
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

    return await requestWithRefresh(API_PATHS.user, options);
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

    return await requestWithRefresh(API_PATHS.user, options);
  }
);

export const firstStepResetPassword = createAsyncThunk<ResetPasswordResponseType, ForgotPasswordFormType>(
  `${SliceNamespace.User}/firstStepResetPassword`,
  async (data) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.passwordReset, options);
  }
);

export const lastStepResetPassword = createAsyncThunk<ResetPasswordResponseType, ResetPasswordFormType>(
  `${SliceNamespace.User}/lastStepResetPassword`,
  async (data) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.reset, options);
  }
);

