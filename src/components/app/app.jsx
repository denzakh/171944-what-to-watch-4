import React from "react";
import Main from "../main/main";
import PropTypes from 'prop-types';

const App = (props) => (
  <Main
    title={props.title}
    genre={props.genre}
    year={props.year}
    filmTitles={props.filmTitles}
  />
);

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  filmTitles: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.array.isRequired
  ])
};
