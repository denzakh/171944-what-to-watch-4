import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, initialState} from "./reducer";

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const rootElement = document.getElementById(`root`);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
);
