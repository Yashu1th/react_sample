import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import App from "./App";
import rootReducer from "./store";
import { setAPIProxy } from "./utils/api";

// Set API proxy for axios requests
setAPIProxy(axios);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
