import { ADD_POSTS, IS_LOADING } from "../types";

const initialState = {
  posts: [],
  isLoading: true,
};

const callApi = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      state = { ...state, posts: [...state.posts, action.payload] };
      return state;
    case IS_LOADING:
      state = { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default callApi;
