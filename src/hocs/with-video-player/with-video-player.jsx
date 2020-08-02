import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.timerId = null;

      this.state = {
        isPlaying: props.isPlaying || false,
        isMuted: props.isMuted || true,
      };

      this._videoRef = createRef();

      this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
      this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
    }

    componentDidMount() {
      const {isMuted} = this.state;
      const video = this._videoRef.current;

      if (video && isMuted) {
        video.muted = true;
      }
    }

    componentDidUpdate(prevProps) {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;
      const {src} = this.props;

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

    componentWillUnmount() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    }

    handlerMouseEnter() {
      this.timerId = setTimeout(() =>
        this.setState({
          isPlaying: true
        }), 1000);
    }

    handlerMouseLeave() {
      clearTimeout(this.timerId);

      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {src, poster, width, height} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnter={this.handlerMouseEnter}
          onMouseLeave={this.handlerMouseLeave}
        >
          <video
            ref={this._videoRef}
            style={{objectFit: `cover`}}
            src={src}
            poster={poster}
            width={width}
            height={height}
          ></video>
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;

