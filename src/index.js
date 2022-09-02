import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  localStorage["items"] = JSON.stringify(store.getState().cities);
});

window.store = store;
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
console.log("rerender");
