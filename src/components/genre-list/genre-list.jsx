import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const GenreList = (props) => {

  const {currentGenre, genreList, setCurrentGenre} = props;

  const isActiveClass = (currentGenre, genreItem) => {
    if (currentGenre === genreItem) {
      return `catalog__genres-item catalog__genres-item--active`;
    }
    return `catalog__genres-item`;
  }

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genreItem)=>{
        return (
          <li key={genreItem}
            className={isActiveClass(currentGenre, genreItem)}
          >
            <a href="#"
              className="catalog__genres-link"
              onClick={(e)=>{
                e.preventDefault();
                setCurrentGenre(genreItem);
              }}
            >{genreItem}</a>
          </li>
        )
      })}
    </ul>
  );
}

GenreList.propTypes = {
  currentGenre: PropTypes.string,
  genreList: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  setCurrentGenre: PropTypes.func
};

export default GenreList;
