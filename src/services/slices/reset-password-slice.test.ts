import { firstStepResetPassword, lastStepResetPassword } from "../thunks";
import reducer, { initialState } from "./reset-password-slice";

describe("reset-password-slice reducer", () => {
  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  describe("firstStepResetPassword action", () => {
    it("should correctly update state with pending firstStepResetPassword action", () => {
      const state = reducer(initialState, { type: firstStepResetPassword.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled firstStepResetPassword action", () => {
      const message = "message";
      const state = reducer(initialState, {
        type: firstStepResetPassword.fulfilled.type,
        payload: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: true,
        error: null,
        message,
      });
    });

    it("should correctly update state with rejected firstStepResetPassword action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: firstStepResetPassword.rejected.type,
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

  describe("lastStepResetPassword action", () => {
    it("should correctly update state with pending lastStepResetPassword action", () => {
      const state = reducer(initialState, { type: lastStepResetPassword.pending.type });

      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
        error: null,
      });
    });

    it("should correctly update state with fulfilled lastStepResetPassword action", () => {
      const message = "message";
      const state = reducer(initialState, {
        type: lastStepResetPassword.fulfilled.type,
        payload: { message },
      });

      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: true,
        error: null,
        message,
      });
    });

    it("should correctly update state with rejected lastStepResetPassword action", () => {
      const message = "error";
      const state = reducer(initialState, {
        type: firstStepResetPassword.rejected.type,
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
