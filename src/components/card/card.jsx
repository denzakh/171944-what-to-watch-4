import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  const {film, onMouseEnter, onMouseLeave} = props;

  const handlerMouseEnter = (e) => {
    onMouseEnter(film);
  }

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handlerMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" href={film.href}>{film.title}</a>
      </h3>
    </article>
  )
};

export default Card;

Card.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

