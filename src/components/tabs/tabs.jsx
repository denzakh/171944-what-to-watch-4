import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {

  const {tabList, activeItem, setActiveItem, children} = props;

  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(tabList).map((tabName) => (
              <li
                className={`movie-nav__item ${activeItem === tabName && `movie-nav__item--active`}`}
                key={tabName}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(tabName);
                  }}
                >{tabName}</a>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </div>
    </React.Fragment>
  );
};

Tabs.propTypes = {
  tabList: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tabs;
