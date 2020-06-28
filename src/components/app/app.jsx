import React from "react";
import Main from "../main/main";
import PropTypes from 'prop-types';

const App = (props) => (
  <Main
    promoFilm={props.promoFilm}
    films={props.films}
  />
);

export default App;

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};
