import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

import { GlobalStyle } from "./theme/globalStyle";
import { ListArticles } from "./components";
import Main from "./pages/main";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Main>
          <Switch>
            <Route exact path="/" component={ListArticles} />
            <Route path="/:category" component={ListArticles} />
          </Switch>
        </Main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
