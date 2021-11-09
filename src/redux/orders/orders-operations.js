import axios from "axios";
import {
  addOrderRequested,
  addOrderSuccess,
  addOrderFailure,
  getAllForADayRequest,
  getAllForADaySuccess,
  getAllForADayError,
} from "./orders-actions";

axios.defaults.baseURL = "http://localhost:4444";

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
    console.log(data);
    dispatch(addOrderSuccess(data));
  } catch (error) {
    dispatch(addOrderFailure(error.message));
  }
};
const getAllOrdersForDay = (day) => async (dispatch, getState) => {
  dispatch(getAllForADayRequest());
  try {
    const authToken = getState().auth.token;
    token.set(authToken);
    const { data } = await axios.get(`/api/v1/orders/day/${day}`);
    dispatch(getAllForADaySuccess(data));
  } catch (error) {
    dispatch(getAllForADayError());
  }
};

export { addOrder, getAllOrdersForDay };
