import React from "react";
import PropTypes from "prop-types";

const TabDetails = (props) => {
  const {runtime, genreList, year, director, actors} = props;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {actors.split(`, `).map((item)=>{
                return <React.Fragment key={item}>{item}<br /></React.Fragment>;
              })}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runtime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">
              {genreList.map((item)=>{
                return <React.Fragment key={item}>{item}<br /></React.Fragment>;
              })}
            </span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{year}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

TabDetails.propTypes = {
  runtime: PropTypes.string.isRequired,
  genreList: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired
};

export default TabDetails;
