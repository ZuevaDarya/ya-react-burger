import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { Dispatch, Middleware, MiddlewareAPI, UnknownAction } from "redux";
import { updateToken } from "../../utils/functions/request";
import { RootState } from "../store";

type TWSActions<TMessage> = {
  connect: ActionCreatorWithPayload<string>;
  disconnect: ActionCreatorWithoutPayload;
  sendMessage?: ActionCreatorWithPayload<unknown>;
  onConnected: ActionCreatorWithPayload<Event>;
  onDisconnected: ActionCreatorWithPayload<CloseEvent>;
  onError: ActionCreatorWithPayload<string>;
  onMessageRecived: ActionCreatorWithPayload<TMessage>;
};

type TWSOptions = {
  withTokenRefresh: boolean;
};

const RECONNECT_TIME = 3000;

export function createWSMiddleware<TMessage>(
  {
    connect,
    disconnect,
    onConnected,
    onDisconnected,
    onError,
    onMessageRecived,
    sendMessage
  }: TWSActions<TMessage>,
  { withTokenRefresh }: TWSOptions
): Middleware<unknown, RootState, Dispatch<UnknownAction>> {
  let ws: WebSocket | null = null;
  let url: string;
  let isConnected = false;
  let reconnectTimer = 0;

  return (({ dispatch }: MiddlewareAPI<Dispatch<UnknownAction>, RootState>) =>
    (next: Dispatch<UnknownAction>) =>
    (action: UnknownAction) => {
      if (connect.match(action)) {
        if (ws !== null) {
          console.warn("WebSocket is already connected");
          return;
        }

        url = action.payload;
        ws = new WebSocket(url);
        isConnected = true;

        ws.onopen = (event: Event) => {
          dispatch(onConnected(event));
        };

        ws.onclose = (event: CloseEvent) => {
          dispatch(onDisconnected(event));
          ws = null;

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch(connect(url));
            }, RECONNECT_TIME);
          }
        };

        ws.onerror = (_event: Event) => {
          dispatch(onError("Error connection"));
        };

        ws.onmessage = (event: MessageEvent) => {
          const data = JSON.parse(event.data);
          dispatch(onMessageRecived(data));

          if (withTokenRefresh && data.message === "Invalid or missing token") {
            updateToken().then((refreshData) => {
              const wssUrl = new URL(url);
              wssUrl.searchParams.set("token", refreshData.accessToken.replace("Bearer ", ""));
              dispatch(connect(wssUrl.toString()));
            });

            dispatch(disconnect());
          }
        };
      }

      if (disconnect.match(action)) {
        if (ws !== null) {
          ws.close();
        }

        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        ws = null;
      }

      if (sendMessage?.match(action)) {
        if (ws !== null && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(action.payload));
        } else {
          console.warn('WebSocket is not open. Cannot send message.');
        }
      }

      return next(action);
    }) as Middleware;
}
