import { SET_CATEGORY } from "../actions/categoriesActions";
import { today } from "../../utils/variables";

const categoriesInitialState = {
  category: 0,
  endpoint: `/latest/${today}`,
};

export function categoryReducer(state = categoriesInitialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload.id,
        endpoint: action.payload.endpoint,
      };

    default:
      return state;
  }
}
