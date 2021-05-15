import Axios from "axios";

export const setTodoList = (data) => ({
  type: "SET_TODO_LIST",
  payload: data,
});

export const setLoading = (data) => ({
  type: "SET_LOADING",
  payload: data,
});

export const getTodo = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.get(
      `${process.env.REACT_APP_API_URL}/todo/getTodo`
    );
    dispatch(setTodoList(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const addTodo = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.post(
      `${process.env.REACT_APP_API_URL}/todo/addTodo`,
      data
    );
    dispatch(setTodoList(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.patch(
      `${process.env.REACT_APP_API_URL}/todo/updateTodo/${id}`,
      data
    );
    dispatch(setTodoList(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await Axios.delete(
      `${process.env.REACT_APP_API_URL}/todo/deleteTodo/${id}`
    );
    dispatch(setTodoList(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};

export const completeTodo = (id, data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { name, category_id } = data;
    const results = await Axios.patch(
      `${process.env.REACT_APP_API_URL}/todo/updateTodo/${id}`,
      {
        name: name,
        category_id: category_id,
        completed: true,
      }
    );
    dispatch(setTodoList(results.data));
    if (results) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    console.log("error: ", err);
  }
};
