import { axiosInstance } from "../../config/axiosInstance";
import {
  loginUserFailure,
  loginUserStart,
  loginUserSuccess,
} from "../userSlice";
// import setAuthToken from "./setAuthToken";
// Register new user

// Log in user
export const loginCall = async (credentials, dispatch) => {
  dispatch(loginUserStart);
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  };
  try {
    const res = await axiosInstance.post("/auth/login", credentials, config);
    res.data && window.location.replace("/");
    console.log(res);
    dispatch(loginUserSuccess(res.data));
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.log(error.response);
    dispatch(loginUserFailure(error?.response?.data));
  }
};
// loading user
// export const loadUserCall = async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axiosInstance.get("/auth");
//     dispatch({ type: types.LOAD_USER_SUCCESS, payload: res.data });
//   } catch (error) {
//     console.log(error?.response);
//     dispatch({
//       type: types.LOAD_USER_FAILURE,
//       // payload: error?.response?.data.errors,
//       payload: error,
//     });
//   }
// };
// export const logOut = (dispatch) => {
//   dispatch({ type: types.LOG_OUT_USER, payload: "you are loging out..." });
// };
