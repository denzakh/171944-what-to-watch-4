import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, initialState} from "./reducer";

const store = createStore(reducer, initialState);

const rootElement = document.getElementById(`root`);
ReactDOM.render(
  <Provider store={store}>
    <App promoFilm={films[0]} films={films} />
  </Provider>,
  rootElement
)
