import { createAction } from "@reduxjs/toolkit";

const addOrderRequested = createAction("orders/addOrderRequested");
const addOrderSuccess = createAction("orders/addOrderSuccess");
const addOrderFailure = createAction("orders/addOrderFailure");

export { addOrderRequested, addOrderSuccess, addOrderFailure };
