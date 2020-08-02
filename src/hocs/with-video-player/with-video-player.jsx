import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {formatTime} from "../../utils/common-utils";

// formatTime = (time, hours)

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.timerId = null;

      this.state = {
        isPlaying: props.isPlaying || false,
        isMuted: props.isMuted || true,
        progress: 0,
        duration: null
      };

      this._videoRef = createRef();

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handlePlayToggle = this.handlePlayToggle.bind(this);
    }

    componentDidMount() {
      const {isMuted} = this.state;
      const video = this._videoRef.current;

      if (video && isMuted) {
        video.muted = true;
      }

      video.addEventListener("canplay", ()=> {
          let hasHours = ((video.duration / 3600) >= 1.0);
          let duration = formatTime(video.duration, hasHours);
          this.setState({
            duration
          })
      }, false);

      video.addEventListener("timeupdate", ()=> {
       let hasHours = ((video.duration / 3600) >= 1.0);

        let isUpdate = true;
        if(isUpdate && video.currentTime) {
          let currentTime = formatTime(video.currentTime, hasHours);
          let progress = Math.floor(video.currentTime * 100 / video.duration);
          console.log(progress);
          this.setState({
            progress
          });
          isUpdate = false;
          setTimeout(()=>{
            isUpdate = true;
          }, 1000);
        }
      }, false);
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

      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    }

    handleMouseEnter() {
      this.timerId = setTimeout(() =>
        this.setState({
          isPlaying: true
        }), 1000);
    }

    handleMouseLeave() {
      clearTimeout(this.timerId);

      this.setState({
        isPlaying: false
      });
    }

    handlePlayToggle(progress) {
      this.setState({
        isPlaying: !this.state.isPlaying,
        progress
      });
    }

    render() {
      const {src, poster, width, height} = this.props;

      const getWith = () => {
        if(width) {
          return width;
        }
        return `100%`;
      }

      const getHeight = () => {
        if(height) {
          return height;
        }
        return `100%`;
      }

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          handlePlayToggle={this.handlePlayToggle}
          progress={this.state.progress}
          duration={this.state.duration}
        >
          <video
            ref={this._videoRef}
            style={{objectFit: `cover`}}
            src={src}
            poster={poster}
            width={getWith()}
            height={getHeight()}
          ></video>
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;

