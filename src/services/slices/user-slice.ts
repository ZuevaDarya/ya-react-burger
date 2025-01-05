import { createSlice } from '@reduxjs/toolkit';
import { SliceNamespace } from '../../constants/slice-namespace';
import { TUserState } from '../../types/services-types';
import { getUser, login, logout, register, updateUser } from '../thunks';
import { localStorageKey } from '../../constants/local-storage-key';
import getCorrectToken from '../../utils/functions/get-correct-token';

const initialState: TUserState = {
  user: null,
  isRequest: false,
  isSuccess: false,
  isLogoutRequest: false,
  error: null
};

const userSlice = createSlice({
  name: SliceNamespace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRequest = false;
        state.isSuccess = true;
        state.error = null;
        localStorage.setItem(localStorageKey.AccessToken, getCorrectToken(payload.accessToken));
        localStorage.setItem(localStorageKey.RefreshToken, payload.refreshToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      })
      .addCase(login.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRequest = false;
        state.isSuccess = true;
        state.error = null;
        localStorage.setItem(localStorageKey.AccessToken, getCorrectToken(payload.accessToken));
        localStorage.setItem(localStorageKey.RefreshToken, payload.refreshToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      })
      .addCase(logout.pending, (state) => {
        state.isLogoutRequest = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLogoutRequest = false;
        state.isSuccess = false;
        state.error = null;
        localStorage.removeItem(localStorageKey.AccessToken);
        localStorage.removeItem(localStorageKey.RefreshToken);
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLogoutRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      })
      .addCase(getUser.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRequest = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      })
      .addCase(updateUser.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRequest = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      });
  }
});

export default userSlice.reducer;
