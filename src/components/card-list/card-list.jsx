import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const SmallMovieCardWrapped = withVideoPlayer(SmallMovieCard);

const CardList = (props) => {
  const {films, setActiveItem} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film)=>{
        return (<SmallMovieCardWrapped
          key={film.title}
          film={film}
          onClick={setActiveItem} />);
      })}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  films: PropTypes.array.isRequired,
  setActiveItem: PropTypes.func
};
