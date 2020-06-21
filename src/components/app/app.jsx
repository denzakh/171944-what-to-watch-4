import React from "react";
import Main from "../main/main";
import PropTypes from 'prop-types';

const App = (props) => (
  <Main
    settings={props.settings}
    films={props.films}
  />
);

export default App;

App.propTypes = {
  settings: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};
