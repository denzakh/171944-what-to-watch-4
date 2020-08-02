import React, {PureComponent, createRef} from "react";

const VideoPlayer = (props) => {
  return <div className="small-movie-card__image">
    {props.children}
  </div>;
}

export default VideoPlayer;
