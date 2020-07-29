import {reducer, initialState, actionCreatorList} from "./reducer.js";
import genres from "./mocks/genre-list.js";

const defaultGenre = `All genres`;

it(`Should initial state change correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentGenre: `All genres`,
    currentFilms: []
  });
});

it(`Should initial state change correctly`, () => {
  const action = actionCreatorList.setCurrentGenre(genres[1]);
  expect(reducer(initialState, action)).toEqual({...initialState, currentGenre: genres[1]});
});
