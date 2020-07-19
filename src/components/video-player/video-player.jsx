import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {isMuted, poster, src, width, height} = this.props;
    const video = this._videoRef.current;

    if(video) {
      video.src = src;
      video.poster = poster;
      video.width = width;
      video.height = height;

      if (isMuted) {
        video.muted = true;
      }
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
    return <video ref={this._videoRef} style={{objectFit: `cover`}}></video>;
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
