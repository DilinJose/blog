import { getData } from "../api/Services";

export const getPostData = () => async (dispatch) => {
  const { data } = await getData("posts");

  dispatch({
    type: "GET_POST_DATA",
    payload: data,
  });
};
