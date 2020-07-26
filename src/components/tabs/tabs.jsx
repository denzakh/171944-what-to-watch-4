import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {

  const {tabList, activeTab, onClick, children} = props;

  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(tabList).map((tabName) => (
              <li
                className={`movie-nav__item ${activeTab === tabName && `movie-nav__item--active`}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClick(tabName);
                }}
                key={tabName}
              >
                <a href="#" className="movie-nav__link">{tabName}</a>
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
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tabs;
