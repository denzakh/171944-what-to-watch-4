import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import films from "../../mocks/films";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, initialState} from "../../reducer";

const store = createStore(
  reducer,
  initialState
);


describe(`Main component`, ()=>{
  it(`should render Main component markup`, () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Main
          promoFilm={films[0]}
          films={films}
        />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
