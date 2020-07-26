import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {isMuted} = this.props;
    const video = this._videoRef.current;

    if (video && isMuted) {
      video.muted = true;
    }
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;
    const {src, isPlaying} = this.props;

    if (isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        video.src = src;
        video.play();
      } else {
        video.src = ``;
      }
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = ``;
  }

  render() {
    const {src, poster, width, height} = this.props;
    return <div className="small-movie-card__image">
      <video
        ref={this._videoRef}
        style={{objectFit: `cover`}}
        src={src}
        poster={poster}
        width={width}
        height={height}
      ></video>
    </div>;
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired
};
