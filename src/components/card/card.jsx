import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  const {title, poster, href, onMouseEnter, onMouseLeave} = props;

  return (
    <article className="small-movie-card catalog__movies-card" key={title}>
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a className="small-movie-card__link" href={href}>{title}</a>
      </h3>
    </article>
  )
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

