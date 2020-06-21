import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";

let settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

ReactDOM.render(<App settings={settings} films={films}
/>, document.querySelector(`#root`));
