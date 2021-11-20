import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

axios.defaults.baseURL = "https://teatralna.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (registrationObject) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post(
      "/api/v1/auth/signup",
      registrationObject
    );
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const logIn = (loginObject) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post("/api/v1/auth/signin", loginObject);
    dispatch(loginSuccess(data.result));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async (dispatch, getState) => {
  dispatch(logoutRequest());

  try {
    const authToken = getState().auth.token;
    token.set(authToken);

    const { data } = await axios.get("/api/v1/auth/logout");
    token.unset();

    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get("/api/v1/auth/current");
    dispatch(getCurrentUserSuccess(data.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export { token, register, logIn, logOut, getCurrentUser };
