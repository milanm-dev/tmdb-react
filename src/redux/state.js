const initialState = {
  loading: false,
  currentPage: 1,
  movies: [],
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};

export default state;
