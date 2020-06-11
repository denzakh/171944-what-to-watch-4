import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main title={props.title} genre={props.genre} year={props.year} />;

};

export default App;
