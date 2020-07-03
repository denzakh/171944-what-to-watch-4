import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";

ReactDOM.render(<App promoFilm={films[0]} films={films}
/>, document.querySelector(`#root`));
