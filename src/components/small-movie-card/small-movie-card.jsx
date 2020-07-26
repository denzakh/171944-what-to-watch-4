import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {film, isPlaying, onMouseEnter, onMouseLeave, onClick} = this.props;

    const handlerClick = (e) => {
      e.preventDefault();
      onClick(film);
    };

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handlerClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={film.src}
            poster={film.poster}
            width={210}
            height={175}
            isMuted={true}
            isPlaying={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title" >
          <a className="small-movie-card__link" href="">{film.title}</a>
        </h3>
      </article>
    );
  }
}

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

