import { axiosInstance } from "../../config/axiosInstance";
import {
  fetchStudentsFailure,
  fetchStudentsStart,
  fetchStudentsSuccess,
  registerStudentFailure,
  registerStudentStart,
  registerStudentSuccess,
} from "../studentSlice";
// import setAuthToken from "./setAuthToken";
// Register new user

// Log in user
export const registerStudentCall = async (credentials, dispatch, id) => {
  dispatch(registerStudentStart);
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  };
  try {
    const res = await axiosInstance.post(
      "/students/create/" + id,
      credentials,
      config
    );
    dispatch(registerStudentSuccess(res.data));

    res.data && alert(res.data);
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.log(error.response);
    dispatch(registerStudentFailure(error?.response?.data));
  }
};
export const FetchStudents = async (dispatch) => {
  dispatch(fetchStudentsStart());

  try {
    const response = await axiosInstance.get("/students/gt-all");
    dispatch(fetchStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));

    console.error("Error fetching students list: ", error);
  }
};
export const upgradeStudent = async (id) => {
  try {
    const response = await axiosInstance.get("/students/upgrade/" + id);
    alert(response.data);
  } catch (error) {
    console.error("Error fetching students list: ", error);
  }
};
export const downgradeStudent = async (id) => {
  try {
    const response = await axiosInstance.get("/students/down/" + id);
    alert(response.data);
  } catch (error) {
    console.error("Error fetching students list: ", error);
  }
};
