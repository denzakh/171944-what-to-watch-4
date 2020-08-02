import settings from "../settings/settings";

export const getAllUniqueGenres = (filmList, limit) => {
  let allGenreList = [];

  filmList.forEach((film)=>{
    allGenreList = [...allGenreList, ...film.genreList];
  });

  let genreSet = new Set(allGenreList);
  let genreList = Array.from(genreSet).sort();
  genreList.unshift(`All genres`);

  if (limit) {
    genreList.length = limit;
  }
  return genreList;
};

export const getRating = (num) => {
  let level = `--`;

  switch (Math.floor(+num)) {
    case 0:
    case 1:
    case 2:
      level = `Bad`;
      break;
    case 3:
    case 4:
      level = `Normal`;
      break;
    case 5:
    case 6:
    case 7:
      level = `Good`;
      break;
    case 8:
    case 9:
      level = `Very good`;
      break;
    case 10:
      level = `Awesome`;
      break;
    default:
      level = `--`;
      break;
  }

  return level;
};

export const getFilmsGenreLikeThis = (films, excludeFilm, thisGenreList, limit = films.length) => {

  let filmsGenreLikeThis = films.filter((filmItem)=>{

    if (filmItem !== excludeFilm) {
      let isFilmLike = false;
      let filmGenreList = filmItem.genreList;

      thisGenreList.forEach((thisGenre)=>{
        filmGenreList.forEach((filmGenre)=>{
          if (thisGenre === filmGenre || thisGenre === settings.ALL_GENRES) {
            isFilmLike = true;
          }
        });
      });

      return isFilmLike;
    }
    return false;
  });

  let result = filmsGenreLikeThis.filter((film, i)=>i < limit);
  return result;
};

export const formatTime = (time, hours) => {

  Number.prototype.lead0 = function(n) {
      var nz = "" + this;
      while (nz.length < n) {
          nz = "0" + nz;
      }
      return nz;
  };

  if (hours) {
      var h = Math.floor(time / 3600);
      time = time - h * 3600;

      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);

      return h.lead0(2)  + ":" + m.lead0(2) + ":" + s.lead0(2);
  } else {
      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);

      return m.lead0(2) + ":" + s.lead0(2);
  }
};


