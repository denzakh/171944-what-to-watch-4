import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component, defaultActiveItem = null) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: defaultActiveItem,
      };

      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
      this.setState(
          {
            activeItem: item
          }
      );

      if (this.props.toChangeActiveItem) {
        this.props.toChangeActiveItem(item);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          setActiveItem={this.setActiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    toChangeActiveItem: PropTypes.func,
  };

  return WithActiveItem;
};

export default withActiveItem;
