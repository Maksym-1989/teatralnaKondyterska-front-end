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
  dispatch(addOrderRequested());
  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.post("/api/v1/orders", formObj);
    dispatch(addOrderSuccess(data));
    alertSuccess("Заказ создан")
    return data;
  } catch (error) {
    dispatch(addOrderFailure(error.message));
    alertError(error.message);
  }
};

const getAllOrdersForDay = (day) => async (dispatch, getState) => {
  dispatch(getAllForAMonthRequest());
  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.get(`/api/v1/orders/day/${day}`);
    dispatch(getAllForADaySuccess(data));
  } catch (error) {
    dispatch(getAllForADayError());
    alertError(error.message);
  }
};
const getAllOrdersOfMonth = (month) => async (dispatch, getState) => {
  dispatch(getAllForADayRequest());
  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.get(`/api/v1/orders/${month}`);
    dispatch(getAllForAMonthSuccess(data));
  } catch (error) {
    dispatch(getAllForAMonthError());
    alertError(error.message);
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
