import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import films from "../../mocks/films";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const initialState = {
  currentGenre: `All genres`,
  currentFilms: [],
  promoFilm: films[0],
  films,
  showMainCardCount: 8
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

describe(`App component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <App
            currentGenre={`All genres`}
            onCurrentGenreChange={()=>{}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

