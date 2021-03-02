import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
} from "../actions/articlesActions";

//initialState

const articlesInitialState = {
  loading: false,
  articles: [],
  error: false,
};

//reducer

export function newsReducer(state = articlesInitialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        articles: [],
        error: false,
        loading: true,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        error: false,
        loading: false,
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        articles: [],
        error: true,
      };
    default:
      return state;
  }
}
