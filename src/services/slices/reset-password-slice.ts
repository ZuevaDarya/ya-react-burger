import { createSlice } from '@reduxjs/toolkit';
import { ResetPasswordStateType } from '../../types/services-types';
import { SliceNamespace } from '../../constants/slice-namespace';
import { firstStepResetPassword, lastStepResetPassword } from '../thunks';

const initialState: ResetPasswordStateType = {
  message: null,
  isRequest: false,
  isSuccess: false,
  error: null
};

const resetPasswordSlice = createSlice({
  name: SliceNamespace.ResetPassword,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(firstStepResetPassword.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(firstStepResetPassword.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(firstStepResetPassword.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      })
      .addCase(lastStepResetPassword.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(lastStepResetPassword.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(lastStepResetPassword.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.error = String(action.error.message);
      });
  }
});

export default resetPasswordSlice.reducer;
