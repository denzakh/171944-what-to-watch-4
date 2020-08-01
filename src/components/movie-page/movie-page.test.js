import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page";
import films from "../../mocks/films";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, initialState} from "../../reducer";

const store = createStore(
    reducer,
    initialState
);

describe(`MoviePage component`, ()=>{
  it(`should render MoviePage component markup`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MoviePage
            film={films[0]}
            films={films}
            onActiveMoviePageChange={()=>{}}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
