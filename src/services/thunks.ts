import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATHS } from "../constants/api-constants";
import { localStorageKey } from "../constants/local-storage-key";
import { SliceNamespace } from "../constants/slice-namespace";
import {
  TGetOrderResponse,
  TGetUserResponse,
  TLoginResponse,
  TLogoutResponse,
  TOrderRespone,
  TRegisterResponse,
  TResetPasswordResponse,
  TUpdateUserResponse,
} from "../types/services-types";
import {
  TForgotPasswordForm,
  TIngredient,
  TLoginForm,
  TProfileForm,
  TRegistrationForm,
  TResetPasswordForm,
} from "../types/types";
import { request, requestWithRefresh } from "../utils/functions/request";

export const getIngredients = createAsyncThunk<{ data: TIngredient[] }>(
  `${SliceNamespace.BurgerIngredients}/getIngredients`,
  async () => {
    return await request(API_PATHS.ingredients);
  }
);

export const createOrder = createAsyncThunk<TOrderRespone, string[]>(
  `${SliceNamespace.OrderDetails}/createOrder`,
  async (ingredientsIds) => {
    const accessToken = localStorage.getItem(localStorageKey.AccessToken);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + accessToken || "",
      },
      body: JSON.stringify({
        ingredients: ingredientsIds,
      }),
    };

    return await requestWithRefresh(API_PATHS.orders, options);
  }
);

export const register = createAsyncThunk<TRegisterResponse, TRegistrationForm>(
  `${SliceNamespace.User}/register`,
  async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.register, options);
  }
);

export const login = createAsyncThunk<TLoginResponse, TLoginForm>(
  `${SliceNamespace.User}/login`,
  async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.login, options);
  }
);

export const logout = createAsyncThunk<TLogoutResponse>(
  `${SliceNamespace.User}/logout`,
  async () => {
    const refreshToken = localStorage.getItem(localStorageKey.RefreshToken);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: refreshToken || "" }),
    };

    return await request(API_PATHS.logout, options);
  }
);

export const updateUser = createAsyncThunk<TUpdateUserResponse, TProfileForm>(
  `${SliceNamespace.User}/updateUser`,
  async (data) => {
    const accessToken = localStorage.getItem(localStorageKey.AccessToken);

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + accessToken || "",
      },
      body: JSON.stringify(data),
    };

    return await requestWithRefresh(API_PATHS.user, options);
  }
);

export const getUser = createAsyncThunk<TGetUserResponse>(
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

export const firstStepResetPassword = createAsyncThunk<TResetPasswordResponse, TForgotPasswordForm>(
  `${SliceNamespace.User}/firstStepResetPassword`,
  async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.passwordReset, options);
  }
);

export const lastStepResetPassword = createAsyncThunk<TResetPasswordResponse, TResetPasswordForm>(
  `${SliceNamespace.User}/lastStepResetPassword`,
  async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    return await request(API_PATHS.reset, options);
  }
);

export const getOrder = createAsyncThunk<TGetOrderResponse, { number: string }>(
  `${SliceNamespace.OrderDetails}/getOrder`,
  async ({ number }) => {
    return await request(`${API_PATHS.orders}/${number}`);
  }
);
