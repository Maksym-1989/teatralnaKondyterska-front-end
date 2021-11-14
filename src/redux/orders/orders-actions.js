import { createAction } from "@reduxjs/toolkit";

const addOrderRequested = createAction("orders/addOrderRequested");
const addOrderSuccess = createAction("orders/addOrderSuccess");
const addOrderFailure = createAction("orders/addOrderFailure");

const getAllForADayRequest = createAction("orders/getAllForADayRequest");
const getAllForADaySuccess = createAction("orders/getAllForADaySuccess");
const getAllForADayError = createAction("orders/getAllForADayError");

const getAllForAMonthRequest = createAction("orders/getAllForAMonthRequest");
const getAllForAMonthSuccess = createAction("orders/getAllForAMonthSuccess");
const getAllForAMonthError = createAction("orders/getAllForAMonthError");

const deleteOrderRequest = createAction("orders/deleteOrderRequest");
const deleteOrderSuccess = createAction("orders/deleteOrderSuccess");
const deleteOrderError = createAction("orders/deleteOrderError");

export {
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
  deleteOrderError
};
