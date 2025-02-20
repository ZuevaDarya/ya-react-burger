import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNamespace } from "../../constants/slice-namespace";
import { WSStatus } from "../../constants/ws-status";
import { TFeedOrdersState, TWSGetMessage } from "../../types/services-types";

export const initialState: TFeedOrdersState = {
  orders: [],
  total: 0,
  totalToday: 0,
  status: WSStatus.Disconnect,
  connectionError: null,
};

const feedOrdersSlice = createSlice({
  name: SliceNamespace.FeedOrders,
  initialState,
  reducers: {
    connect: (state, _action: PayloadAction<string>) => {
      state.status = WSStatus.Connect;
    },
    disconnect: (state) => {
      state.status = WSStatus.Disconnect;
    },
    onConnected: (state, _action: PayloadAction<Event>) => {
      state.status = WSStatus.OnConnected;
      state.connectionError = null;
    },
    onDisconnected: (state, _action: PayloadAction<CloseEvent>) => {
      state.status = WSStatus.OnDisconnected;
    },
    onError: (state, { payload }: PayloadAction<string>) => {
      state.connectionError = payload;
      state.status = WSStatus.OnError;
    },
    onMessageRecived: (state, { payload }: PayloadAction<TWSGetMessage>) => {
      state.orders = payload.orders;
      state.total = payload.total;
      state.totalToday = payload.totalToday;
      state.status = WSStatus.OnMessageRecived;
    },
  },
});

export const feedOrdersActions = feedOrdersSlice.actions;
export default feedOrdersSlice.reducer;
