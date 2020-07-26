import React from "react";
import PropTypes from "prop-types";

const TabOverview = (props) => {
  const {imdbRating, ratingLevel, imdbVotes, director, actors, plot} = props;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{imdbRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{imdbVotes} votes</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{plot}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {actors}</strong></p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  imdbRating: PropTypes.string.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  imdbVotes: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired
};

export default TabOverview;
