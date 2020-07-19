import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {isPlaying: false};
    this._timerId = null;
  }

  render() {
    const {film, id, onMouseEnter, onMouseLeave, onClick} = this.props;
    const startPlaying = () => this.setState({isPlaying: true});

    const handlerMouseEnter = () => {
      this._timerId = setTimeout(
        () => {
          startPlaying();
          if (onMouseEnter) {
            onMouseEnter(film);
          }
        },
        1000
      );
    };

    const handlerMouseLeave = () => {
      this.setState({isPlaying: false});
      clearTimeout(this._timerId);
      onMouseLeave();
    };

    const handlerClick = (e) => {
      e.preventDefault();
      onClick(id);
    };

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
        onClick={handlerClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={film.src}
            poster={film.poster}
            width={280}
            height={175}
            isPlaying={this.state.isPlaying}
            isMuted={true}
          />
        </div>
        <h3 className="small-movie-card__title" >
          <a className="small-movie-card__link" href="">{film.title}</a>
        </h3>
      </article>
    );
  }

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
