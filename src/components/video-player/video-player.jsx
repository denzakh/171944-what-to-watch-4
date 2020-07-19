import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {isPlaying: props.isPlaying};

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {isMuted, poster, src, width, height} = this.props;
    const video = this._videoRef.current;

    if (isMuted) {
      video.muted = true;
    }

    video.src = src;
    video.poster = poster;
    video.width = width;
    video.height = height;
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;
    const isPlaying = this.props.isPlaying;

    if (isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
        video.load();
      }
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    return <video ref={this._videoRef} style={{objectFit: `cover`}}></video>;
  }
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired
};
