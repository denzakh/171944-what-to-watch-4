import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  const {film, id, onMouseEnter, onMouseLeave, onClick} = props;

  const handlerMouseEnter = () => {
    onMouseEnter(film);
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

export default Card;

Card.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

