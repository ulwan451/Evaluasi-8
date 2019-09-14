import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <div>
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}
