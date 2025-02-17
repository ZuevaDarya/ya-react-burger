import { localStorageKey } from "../../constants/local-storage-key";
import { TRegisterResponse } from "../../types/services-types";
import { MOCK_USER_RESPONSE } from '../../utils/test-data/user';
import { getUser, login, logout, register, updateUser } from "../thunks";
import reducer, { initialState } from "./user-slice";

describe("user-slice reducer", () => {
  let localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
  };

  beforeEach(() => {
    localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
      removeItem: jest.fn(),
    };

    global.localStorage = localStorageMock as unknown as Storage;
  });

  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  describe("register action", () => {
    it("should correctly update state with pending register action", () => {
      const state = reducer(initialState, { type: register.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled register action", () => {
      const mockAccessToken = "Bearer eyJhbGci.eyJpZCI6Ih.agnHgqq";
      const mockRefreshToken = "b9a28d86a8f58db9281bd33ebc58";
      const mockRegisterResponse: TRegisterResponse = {
        user: {
          name: "user",
          email: "user1@yandex.ru",
        },
        success: true,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };

      const state = reducer(initialState, {
        type: register.fulfilled.type,
        payload: mockRegisterResponse,
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: true,
        error: null,
        user: mockRegisterResponse.user,
      });

      expect(localStorageMock.setItem).toHaveBeenCalled();

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        localStorageKey.AccessToken,
        mockAccessToken.replace("Bearer ", "")
      );

      let args = localStorageMock.setItem.mock.calls[0];
      expect(args[0]).toEqual(localStorageKey.AccessToken);
      expect("Bearer " + args[1]).toEqual(mockAccessToken);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        localStorageKey.RefreshToken,
        mockRefreshToken
      );

      args = localStorageMock.setItem.mock.calls[1];
      expect(args[0]).toEqual(localStorageKey.RefreshToken);
      expect(args[1]).toEqual(mockRefreshToken);
    });

    it("should correctly update state with rejected register action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: register.rejected.type,
        error: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
        error: message,
      });
    });
  });

  describe("login action", () => {
    it("should correctly update state with pending login action", () => {
      const state = reducer(initialState, { type: login.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled login action", () => {
      const mockAccessToken = "Bearer eyJhbGci.eyJpZCI6Ih.agnHgqk";
      const mockRefreshToken = "b9a28d86a8f58db9281bd33ebc57";
      const mockRegisterResponse: TRegisterResponse = {
        user: {
          name: "user",
          email: "user1@yandex.ru",
        },
        success: true,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };

      const state = reducer(initialState, {
        type: login.fulfilled.type,
        payload: mockRegisterResponse,
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: true,
        error: null,
        user: mockRegisterResponse.user,
      });

      expect(localStorageMock.setItem).toHaveBeenCalled();

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        localStorageKey.AccessToken,
        mockAccessToken.replace("Bearer ", "")
      );

      let args = localStorageMock.setItem.mock.calls[0];
      expect(args[0]).toEqual(localStorageKey.AccessToken);
      expect("Bearer " + args[1]).toEqual(mockAccessToken);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        localStorageKey.RefreshToken,
        mockRefreshToken
      );

      args = localStorageMock.setItem.mock.calls[1];
      expect(args[0]).toEqual(localStorageKey.RefreshToken);
      expect(args[1]).toEqual(mockRefreshToken);
    });

    it("should correctly update state with rejected login action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: login.rejected.type,
        error: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
        error: message,
      });
    });
  });

  describe("logout action", () => {
    it("should correctly update state with pending logout action", () => {
      const state = reducer(initialState, { type: logout.pending.type });

      expect(state).toEqual({
        ...initialState,
        isLogoutRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled logout action", () => {
      const state = reducer(initialState, { type: logout.fulfilled.type });

      expect(state).toEqual({
        ...initialState,
        isLogoutRequest: false,
        isSuccess: false,
        error: null,
        user: null,
      });

      expect(localStorageMock.removeItem).toHaveBeenCalled();
      expect(localStorageMock.removeItem).toHaveBeenCalledWith(localStorageKey.AccessToken);
      expect(localStorageMock.removeItem).toHaveBeenCalledWith(localStorageKey.RefreshToken);
    });

    it("should correctly update state with rejected logout action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: logout.rejected.type,
        error: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isLogoutRequest: false,
        isSuccess: false,
        error: message,
      });
    });
  });

  describe("getUser action", () => {
    it("should correctly update state with pending getUser action", () => {
      const state = reducer(initialState, { type: getUser.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled getUser action", () => {
      const state = reducer(initialState, {
        type: getUser.fulfilled.type,
        payload: MOCK_USER_RESPONSE,
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: true,
        error: null,
        user: MOCK_USER_RESPONSE.user,
      });
    });

    it("should correctly update state with rejected getUser action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: getUser.rejected.type,
        error: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
        error: message,
      });
    });
  });

  describe("updateUser action", () => {
    it("should correctly update state with pending updateUser action", () => {
      const state = reducer(initialState, { type: updateUser.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled updateUser action", () => {
      const state = reducer(initialState, {
        type: updateUser.fulfilled.type,
        payload: MOCK_USER_RESPONSE,
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: true,
        error: null,
        user: MOCK_USER_RESPONSE.user,
      });
    });

    it("should correctly update state with rejected updateUser action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: updateUser.rejected.type,
        error: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
        error: message,
      });
    });
  });
});
