import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNamespace } from "../../constants/slice-namespace";
import { WSStatus } from "../../constants/ws-status";
import { TProfileOrdersState, TWSGetMessage } from "../../types/services-types";

export const initialState: TProfileOrdersState = {
  orders: [],
  status: WSStatus.Disconnect,
  connectionError: null,
};

const profileOrdersSlice = createSlice({
  name: SliceNamespace.ProfileOrders,
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
      state.status = WSStatus.OnMessageRecived;
    },
  },
});

export const profileOrdersActions = profileOrdersSlice.actions;
export default profileOrdersSlice.reducer;
