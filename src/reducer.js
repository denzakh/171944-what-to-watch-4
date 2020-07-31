import films from "./mocks/films";

const MAIN_CARD_COUNT = 8;

export const initialState = {
  currentGenre: `All genres`,
  currentFilms: [],
  promoFilm: films[0],
  films,
  showMainCardCount: 8
};

export const actionTypeList = {
  SET_GENRE: `SET_GENRE`,
  SET_FILMS: `SET_FILMS`,
  SHOW_MORE_CARD: `SHOW_MORE_CARD`
};

export const actionCreatorList = {
  onCurrentGenreChange: (genre) => ({
    type: actionTypeList.SET_GENRE,
    payload: genre
  }),
  setFilms: (filmsArr) => ({
    type: actionTypeList.SET_FILMS,
    payload: filmsArr
  }),
  mainCardCountChange: () => ({
    type: actionTypeList.SHOW_MORE_CARD,
    payload: MAIN_CARD_COUNT
  })

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {currentGenre: action.payload});
    case `SET_FILMS`:
      return Object.assign({}, state, {currentFilms: action.payload});
    case `SHOW_MORE_CARD`:
      return Object.assign({}, state, {showMainCardCount: state.showMainCardCount + action.payload});
    default:
      return state;
  }
};
