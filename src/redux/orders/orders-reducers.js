import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addOrderRequested,
  addOrderSuccess,
  addOrderFailure,
  getAllForADayRequest,
  getAllForADaySuccess,
  getAllForADayError,
  getAllForAMonthError,
  getAllForAMonthSuccess,
  getAllForAMonthRequest,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderError,
  loadRequest,
  loadSuccess,
  loadError,
} from "./orders-actions";

const ordersOfCurrentDay = createReducer([], {
  [addOrderSuccess]: (state, { payload }) => {
    if (!state) {
      return [payload.data];
    }
    return [...state, payload.data];
  },
  [getAllForADaySuccess]: (state, { payload }) => payload.data,
  [deleteOrderSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload.data._id),
});
const ordersOfMonth = createReducer([], {
  [addOrderSuccess]: (state, { payload }) => {
    if (!state) {
      return [payload.data];
    }
    return [...state, payload.data];
  },

  [getAllForAMonthSuccess]: (state, { payload }) => payload.data,
  [deleteOrderSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload.data._id),
});
const load = createReducer(false, {
  [loadRequest]: () => true,
  [loadSuccess]: () => false,
  [loadError]: () => false,
});

const allorders = createReducer([], {});

const ordersReducer = combineReducers({
  ordersOfCurrentDay,
  ordersOfMonth,
  allorders,
  load,
});

export { ordersReducer };
