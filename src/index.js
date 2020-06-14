import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

let settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  filmTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  handleCardTitleClick: ()=>{}
};

ReactDOM.render(<App
  title={settings.title}
  genre={settings.genre}
  year={settings.year}
  filmTitles={settings.filmTitles}
  handleCardTitleClick={settings.handleCardTitleClick}
/>, document.querySelector(`#root`));
