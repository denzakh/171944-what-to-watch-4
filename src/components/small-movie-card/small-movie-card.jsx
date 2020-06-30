import React from "react";
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, id, onMouseEnter, onMouseLeave, onClick} = props;

  const handlerMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(film);
    }
  };

  const handlerClick = (e) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handlerClick}
    >
      <div className="small-movie-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" href="">{film.title}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired
};

