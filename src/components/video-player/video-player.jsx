import React from "react";

const VideoPlayer = (props) => {

  const {onClose, onPlay, handlePlayToggle, isPlaying, duration, progress} = props;

  // controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";

  return <div className="player">
    {props.children}

    <button type="button" className="player__exit" onClick={onClose}>Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100"></progress>
          <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
        </div>
        <div className="player__time-value">{duration}</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play" onClick={handlePlayToggle}>
          <svg viewBox={`0 0 19 19`} width={19} height={19}>
            <use xlinkHref={`#play-s`}></use>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen">
          <svg viewBox={`0 0 27 27`} width={27} height={27}>
            <use xlinkHref={`#full-screen`} />
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;
}

export default VideoPlayer;

