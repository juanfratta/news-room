import axios from "axios";
import { BASE_URL } from "../../utils/variables";

//actions types

export const FETCH_ARTICLES_BEGIN = "FETCH_ARTICLES_BEGIN";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

//actions creators

export const fetchArticles = () => async (dispatch, getState) => {
  const { endpoint } = getState().categories;
  try {
    dispatch({
      type: FETCH_ARTICLES_BEGIN,
    });
    let res = await axios.get(BASE_URL + endpoint);

    dispatch({
      type: FETCH_ARTICLES_SUCCESS,
      payload: res.data.slice(0, 10),
    });
  } catch (error) {
    dispatch({
      type: FETCH_ARTICLES_FAILURE,
      payload: error,
    });
  }
};
