const initialState = {
  loading: false,
  currentPage: 1,
  movies: [],
  bookmark: [],
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_BOOKMARK":
      const exist = state.bookmark.find((x) => x.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          bookmark: state.bookmark.filter((x) => x.id !== action.payload.id),
        };
      } else
        return {
          ...state,
          bookmark: [...state.bookmark, action.payload],
        };
    default:
      return state;
  }
};

export default state;
