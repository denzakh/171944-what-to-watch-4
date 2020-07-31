import {reducer, initialState, actionCreatorList} from "./reducer.js";
import genres from "./mocks/genre-list.js";
import films from "./mocks/films.js";

it(`Should initial state change correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentGenre: `All genres`,
    currentFilms: [],
    promoFilm: films[0],
    films,
    showMainCardCount: 8
  });
});

it(`Should initial state change correctly`, () => {
  const action = actionCreatorList.onCurrentGenreChange(genres[1]);
  const newState = Object.assign({}, initialState, {currentGenre: genres[1]});
  expect(reducer(initialState, action)).toEqual(newState);
});
