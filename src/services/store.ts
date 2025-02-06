import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { WSStatus } from "../constants/ws-status";
import { TPreloadedState, TWSGetMessage } from "../types/services-types";
import { createWSMiddleware } from "./middlewares/ws-middleware";
import { rootReducer } from "./root-reducer";
import { feedOrdersActions } from "./slices/feed-orders-slice";
import { profileOrdersActions } from "./slices/profile-orders-slice";

const preloadedState: TPreloadedState = {
  burgerIngredients: {
    ingredients: [],
    isRequest: false,
    isSuccess: false,
  },
  constructorIngredients: {
    ingredients: [],
    bun: null,
  },
  ingredientDetails: {
    currentIngredient: null,
  },
  orderDetails: {
    order: null,
    isRequest: false,
    isSuccess: false,
  },
  userInfo: {
    user: null,
    isRequest: false,
    isSuccess: false,
    error: null,
    isLogoutRequest: false,
  },
  resetPassword: {
    message: null,
    isRequest: false,
    isSuccess: false,
    error: null,
  },
  feedOrders: {
    orders: [],
    connectionError: null,
    status: WSStatus.Disconnect,
  },
  profileOrders: {
    orders: [],
    connectionError: null,
    status: WSStatus.Disconnect,
  },
};

const feedOrdersWSMiddleware = createWSMiddleware<TWSGetMessage>(
  feedOrdersActions,
  { withTokenRefresh: false }
);

const profileOrdersWSMiddleware = createWSMiddleware<TWSGetMessage>(
  profileOrdersActions,
  { withTokenRefresh: true }
);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(feedOrdersWSMiddleware)
      .concat(profileOrdersWSMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
