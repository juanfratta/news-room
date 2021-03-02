import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { categoryReducer } from "./reducers/categoriesReducer";
import { newsReducer } from "./reducers/articlesReducer";

const rootReducer = combineReducers({
  articles: newsReducer,
  categories: categoryReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
