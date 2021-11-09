import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addOrderFailure,
  addOrderSuccess,
  addOrderRequested,
} from "./orders-actions";

const ordersOfCurrentDay = createReducer([], {
  [addOrderSuccess]: (state, { payload }) => {
    if (!state) {
      return [payload.data];
    }
    // const stateWithNewData = [...state, payload.data];
    return [...state, payload.data];
  },
});
const ordersOfMonth = createReducer([], {});
const allorders = createReducer([], {});

const ordersReducer = combineReducers({
  ordersOfCurrentDay,
  ordersOfMonth,
  allorders,
});

export { ordersReducer };
