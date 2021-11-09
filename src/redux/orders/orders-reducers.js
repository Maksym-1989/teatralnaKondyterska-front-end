import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addOrderRequested,
  addOrderSuccess,
  addOrderFailure,
  getAllForADayRequest,
  getAllForADaySuccess,
  getAllForADayError,
} from "./orders-actions";

const ordersOfCurrentDay = createReducer([], {
  [addOrderSuccess]: (state, { payload }) => {
    if (!state) {
      return [payload.data];
    }
    return [...state, payload.data];
  },
  [getAllForADaySuccess]: (state, { payload }) => payload.data,
});
const ordersOfMonth = createReducer([], {});
const allorders = createReducer([], {});

const ordersReducer = combineReducers({
  ordersOfCurrentDay,
  ordersOfMonth,
  allorders,
});

export { ordersReducer };
