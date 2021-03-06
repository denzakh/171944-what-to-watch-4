import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import films from "../../mocks/films";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, initialState} from "../../reducer";

const store = createStore(
    reducer,
    initialState
);

const promoFilm = films[0];

describe(`Main component`, ()=>{
  it(`should render Main component markup`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Main
            promoFilm={promoFilm}
            films={films}
            currentGenre={`All genres`}
            setCurrentGenre={()=>{}}
            onActiveMoviePageChange={()=>{}}
            toChangeMainCardCount={()=>{}}
            showMainCardCount={8}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


