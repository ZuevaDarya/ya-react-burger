import { WSStatus } from "../../constants/ws-status";
import { MOCK_FEED_RESPONSE } from '../../utils/test-data/feed-orders';
import reducer, { feedOrdersActions, initialState } from "./feed-orders-slice";

describe("feed-orders-slice reducer", () => {
  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should correctly update state with connect action", () => {
    const state = reducer(initialState, feedOrdersActions.connect(""));
    expect(state).toEqual({ ...initialState, status: WSStatus.Connect });
  });

  it("should correctly update state with disconnect action", () => {
    const state = reducer(initialState, feedOrdersActions.disconnect());
    expect(state).toEqual({ ...initialState, status: WSStatus.Disconnect });
  });

  it("should correctly update state with onConnected action", () => {
    const e = new Event("event");
    const state = reducer(initialState, feedOrdersActions.onConnected(e));

    expect(state).toEqual({
      ...initialState,
      status: WSStatus.OnConnected,
      connectionError: null,
    });
  });

  it("should correctly update state with onDisconnected action", () => {
    const e = new Event("close") as CloseEvent;
    const state = reducer(initialState, feedOrdersActions.onDisconnected(e));
    
    expect(state).toEqual({ ...initialState, status: WSStatus.OnDisconnected });
  });

  it("should correctly update state with onError action", () => {
    const message = "error";
    const state = reducer(initialState, feedOrdersActions.onError(message));

    expect(state).toEqual({
      ...initialState,
      status: WSStatus.OnError,
      connectionError: message,
    });
  });

  it("should correctly update state with onMessageRecived action", () => {
    const state = reducer(initialState, feedOrdersActions.onMessageRecived(MOCK_FEED_RESPONSE));
    expect(state).toEqual({
      ...initialState,
      orders: MOCK_FEED_RESPONSE.orders,
      total: MOCK_FEED_RESPONSE.total,
      totalToday: MOCK_FEED_RESPONSE.totalToday,
      status: WSStatus.OnMessageRecived,
    });
  });
});
