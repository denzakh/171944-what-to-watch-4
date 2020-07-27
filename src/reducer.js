export const initialState = {
  currentGenre: `All genres`,
  films: [],
  countFilmsShow: 8,
};

// изменение фильтра по жанрам и получение списка фильмов в соответствии выбранным жанром.

export const actionTypeList = {
  SET_GENRE: `SET_GENRE`
}

export const ActionCreatorList = {
  setGenre: (genre) => ({
    type: actionTypeList.SET_GENRE,
    payload: genre
  })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return: {...state, currentGenre: action.payload}
    default:
      return state
  }
}
