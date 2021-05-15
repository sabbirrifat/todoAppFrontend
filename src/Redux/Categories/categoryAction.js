import { setLoading, getTodo } from "../Todo/todoAction";
import Axios from "axios";

export const setCategories = (data) => ({
  type: "SET_CATEGORIES",
  payload: data,
});

export const getCategories = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.get(
      `${process.env.REACT_APP_API_URL}/category/getCategories`
    );
    dispatch(setCategories(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const addCategory = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.post(
      `${process.env.REACT_APP_API_URL}/category/addCategory`,
      data
    );
    dispatch(setCategories(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const deleteCategory = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.post(
      `${process.env.REACT_APP_API_URL}/category/deleteCategory`,
      data
    );
    dispatch(setCategories(results.data));
    if (results) {
      dispatch(getTodo());
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.patch(
      `${process.env.REACT_APP_API_URL}/category/updateCategory/${id}`,
      data
    );
    dispatch(setCategories(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};
