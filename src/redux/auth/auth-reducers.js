import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  // [registerSuccess]: (_, { payload }) => payload.email,
  [loginSuccess]: (_, { payload }) => {
    return { email: payload.email, name: payload.name };
  },
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => {
    return { email: payload.email, name: payload.name };
  },
});

const token = createReducer(null, {
  // [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
});

export { authReducer };
