import { createSlice } from "@reduxjs/toolkit";
import { SliceNamespace } from "../../constants/slice-namespace";
import { TOrderdetailsState } from "../../types/services-types";
import { createOrder, getOrder } from "../thunks";

export const initialState: TOrderdetailsState = {
  order: null,
  isRequest: false,
  isSuccess: false,
  orderCard: null,
};

const orderDetailsSlice = createSlice({
  name: SliceNamespace.OrderDetails,
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.order = null;
      state.isRequest = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.order = { number: payload.order.number, name: payload.name };
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(createOrder.rejected, (state) => {
        state.isRequest = false;
        state.isSuccess = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.orderCard = payload.orders[0];
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(getOrder.rejected, (state) => {
        state.isRequest = false;
        state.isSuccess = false;
      });
  },
});

export const { clearOrder } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
