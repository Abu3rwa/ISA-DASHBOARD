import { axiosInstance } from "../../config/axiosInstance";
import { useDispatch } from "react-redux";
import {
  fetchParentDataStart,
  fetchParentDataSuccess,
  fetchParentDataFailure,
} from "../../redux/parentSlice";
export const FetchParents = async () => {
  const dispatch = useDispatch();
  dispatch(fetchParentDataStart());

  try {
    const response = await axiosInstance.get("/parents/gt-all");
    dispatch(fetchParentDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchParentDataFailure(error.message));

    console.error("Error fetching parent list:", error);
  }
};
