const INITIAL_STATE = {
  categories: [],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
