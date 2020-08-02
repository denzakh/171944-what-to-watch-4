import React from "react";
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {allGenreList, setActiveItem, activeItem} = props;

  const setActiveClass = (currentGenre, genreItem) => {
    if (currentGenre === genreItem) {
      return `catalog__genres-item catalog__genres-item--active`;
    }
    return `catalog__genres-item`;
  };

  return (
    <ul className="catalog__genres-list">
      {allGenreList.map((genreItem)=>{
        return (
          <li key={genreItem}
            className={setActiveClass(activeItem, genreItem)}
          >
            <a href="#"
              className="catalog__genres-link"
              onClick={(e)=>{
                e.preventDefault();
                setActiveItem(genreItem);
              }}
            >{genreItem}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  currentGenre: PropTypes.string,
  allGenreList: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  setActiveItem: PropTypes.func
};

export default GenreList;
