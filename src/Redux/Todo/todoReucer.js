const INITIAL_STATE = {
  todoList: [],
  loading: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TODO_LIST":
      return {
        ...state,
        todoList: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
