import { createAction } from "@reduxjs/toolkit";

const addOrderRequested = createAction("orders/addOrderRequested");
const addOrderSuccess = createAction("orders/addOrderSuccess");
const addOrderFailure = createAction("orders/addOrderFailure");


const getAllForADayRequest = createAction("orders/getAllForADayRequest");
const getAllForADaySuccess = createAction("orders/getAllForADaySuccess");
const getAllForADayError = createAction("orders/getAllForADayError");

export { addOrderRequested, addOrderSuccess, addOrderFailure, getAllForADayRequest, getAllForADaySuccess, getAllForADayError};
