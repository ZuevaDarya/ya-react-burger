import { createSlice } from '@reduxjs/toolkit';
import { OrderdetailsStateType } from '../types/services-types';
import { SliceNamespace } from '../constants/slice-namespace';

const initialState: OrderdetailsStateType = {
  order: null
};

const orderDetailsSlice = createSlice({
  name: SliceNamespace.OrderDetails,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
});

export default orderDetailsSlice.reducer;
