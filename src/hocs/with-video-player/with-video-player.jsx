import React, {PureComponent} from "react";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.timerId = null;

      this.state = {
        isPlaying: false,
      };

      this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
      this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
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
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnter={this.handlerMouseEnter}
          onMouseLeave={this.handlerMouseLeave}
        />
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
