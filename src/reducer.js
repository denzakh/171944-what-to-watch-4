export const initialState = {
  currentGenre: `All genres`,
  films: []
};

// изменение фильтра по жанрам и получение списка фильмов в соответствии выбранным жанром.

export const actionTypeList = {
  SET_GENRE: `SET_GENRE`,
  SET_FILMS: `SET_FILMS`
}

export const actionCreatorList = {
  setGenre: (genre) => ({
    type: actionTypeList.SET_GENRE,
    payload: genre
  }),
  setFilms: (films) => ({
    type: actionTypeList.SET_FILMS,
    payload: films
  })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return {...state, currentGenre: action.payload}
    case `SET_FILMS`:
      return {...state, films: action.payload}
    default:
      return state
  }
}
