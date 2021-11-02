import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";

const store = configureStore({
  reducer: userReducer,
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
