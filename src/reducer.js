import films from "./mocks/films";

const MAIN_CARD_COUNT = 8;

export const initialState = {
  currentGenre: `All genres`,
  activeMoviePage: null,
  currentFilms: [],
  promoFilm: films[0],
  films,
  showMainCardCount: MAIN_CARD_COUNT
};

export const actionTypeList = {
  SET_GENRE: `SET_GENRE`,
  SET_FILMS: `SET_FILMS`,
  SHOW_MORE_CARD: `SHOW_MORE_CARD`,
  SET_ACTIVE_MOVIE_PAGE: `SET_ACTIVE_MOVIE_PAGE`
};

export const actionCreatorList = {
  setCurrentGenre: (genre) => ({
    type: actionTypeList.SET_GENRE,
    payload: genre
  }),
  activeMoviePage: (film) => ({
    type: actionTypeList.SET_ACTIVE_MOVIE_PAGE,
    payload: film
  }),
  setFilms: (filmsArr) => ({
    type: actionTypeList.SET_FILMS,
    payload: filmsArr
  }),
  toChangeMainCardCount: () => ({
    type: actionTypeList.SHOW_MORE_CARD,
    payload: MAIN_CARD_COUNT
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeList.SET_GENRE:
      return Object.assign({}, state, {currentGenre: action.payload, showMainCardCount: MAIN_CARD_COUNT});
    case actionTypeList.SET_FILMS:
      return Object.assign({}, state, {currentFilms: action.payload});
    case actionTypeList.SHOW_MORE_CARD:
      return Object.assign({}, state, {showMainCardCount: state.showMainCardCount + action.payload});
    case actionTypeList.SET_ACTIVE_MOVIE_PAGE:
      return Object.assign({}, state, {activeMoviePage: action.payload});
    default:
      return state;
  }
};
