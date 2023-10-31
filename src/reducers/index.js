import { combineReducers } from "redux";

const initialValue = {
  posts: [],
};

const postReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_POST_DATA":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ postReducer: postReducer });
