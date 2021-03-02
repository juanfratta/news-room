import { ListArticles } from "./components";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Main from "./pages/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
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
