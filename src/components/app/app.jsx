import React from "react";
import Main from "../main/main";

const App = (props) => {
  return <Main title={props.title} genre={props.genre} year={props.year} />;

};

export default App;
