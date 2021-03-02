import { today } from "../../utils/variables";

export const SET_CATEGORY = "SET_CATEGORY";

export const setCategory = (id) => (dispatch, getState) => {
  let { endpoint } = getState().categories;

  if (id === "0") {
    endpoint = `/latest/${today}`;
  } else if (id > 0 && id <= 6) {
    endpoint = `/news/category/${id}`;
  } else {
    endpoint = `/search/${id}`;
  }

  try {
    dispatch({
      type: SET_CATEGORY,
      payload: { id: id, endpoint: endpoint },
    });
  } catch (error) {
    console.log(error);
  }
};
