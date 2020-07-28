import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const GenreList = (props) => {

    const {currentGenre, genreList, setCurrentGenre} = props;

    const isActiveClass = (currentGenre, genreItem) => {
      if (currentGenre === genreItem) {
        return `catalog__genres-item--active`;
      }
      return ``;
    }

    return (
      <ul className="catalog__genres-list">
        {genres.map((genreItem)=>{
          return (
            <li key={genreItem}
              className=`catalog__genres-item ${isActiveClass(currentGenre, genreItem)}`
            >
              <a href="#"
                className="catalog__genres-link"
                onClick={(e)=>{
                  e.preventDefault();
                  setCurrentGenre(genreItem);
                }}
              >{genreItem}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

GenresList.propTypes = {
  currentGenre: PropTypes.string,
  genreList: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  setCurrentGenre: PropTypes.func
};

export default GenreList;
