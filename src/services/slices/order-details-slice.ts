import { createSlice } from '@reduxjs/toolkit';
import { OrderdetailsStateType } from '../../types/services-types';
import { SliceNamespace } from '../../constants/slice-namespace';
import { createOrder } from '../thunks';

const initialState: OrderdetailsStateType = {
  order: null,
  isRequest: false,
  isSuccess: false
};

const orderDetailsSlice = createSlice({
  name: SliceNamespace.OrderDetails,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.order = { number: payload.order.number, name: payload.name};
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(createOrder.rejected, (state) => {
        state.isRequest = false;
        state.isSuccess = false;
      })
  }
});

export default orderDetailsSlice.reducer;
