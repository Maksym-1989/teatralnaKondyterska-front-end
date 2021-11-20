import axios from "axios";
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
import { alertError, alertSuccess } from "../../shared/reactAlert";

axios.defaults.baseURL = "https://teatralna.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const addOrder = (formObj) => async (dispatch, getState) => {
  dispatch(loadRequest());
  dispatch(addOrderRequested());
  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.post("/api/v1/orders", formObj);
    dispatch(addOrderSuccess(data));
    dispatch(loadSuccess());
    alertSuccess("Заказ создан");
    return data;
  } catch (error) {
    dispatch(addOrderFailure(error.message));
    dispatch(loadError());
    alertError(error.message);
  }
};

const getAllOrdersForDay = (day) => async (dispatch, getState) => {
  dispatch(getAllForAMonthRequest());
  dispatch(loadRequest());

  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.get(`/api/v1/orders/day/${day}`);
    dispatch(getAllForADaySuccess(data));
    dispatch(loadSuccess());
  } catch (error) {
    dispatch(getAllForADayError());
    alertError(error.message);
    dispatch(loadError());
  }
};

const getAllOrdersOfMonth = (month) => async (dispatch, getState) => {
  dispatch(getAllForADayRequest());
  dispatch(loadRequest());

  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.get(`/api/v1/orders/${month}`);
    dispatch(getAllForAMonthSuccess(data));
    dispatch(loadSuccess());
  } catch (error) {
    dispatch(getAllForAMonthError());
    alertError(error.message);
    dispatch(loadError());
  }
};

const deleteOrder = (id) => async (dispatch, getState) => {
  dispatch(deleteOrderRequest());

  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.delete(`/api/v1/orders/${id}`);
    dispatch(deleteOrderSuccess(data));
  } catch (error) {
    dispatch(deleteOrderError());
    alertError(error.message);
  }
};

export { addOrder, getAllOrdersForDay, getAllOrdersOfMonth, deleteOrder };
