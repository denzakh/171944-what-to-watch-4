import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";

class App extends PureComponent {

  constructor(props){
    super(props);
  }

  _renderApp() {
    return (<Main
      settings={this.props.settings}
      films={this.props.films}
    />);
  }

  render() {

    let filmSrc = this.props.films[0];
    let film = {
      title: filmSrc.Title,
      year: filmSrc.Year,
      genre: filmSrc.Genre,
      director: filmSrc.Director,
      actors: filmSrc.Actors,
      plot: filmSrc.Plot,
      poster: filmSrc.Poster,
      imdbRating: filmSrc.imdbRating,
      imdbVotes: filmSrc.imdbVotes,
      bg: filmSrc.bg,
      bgcolor: filmSrc.bgcolor,
      avatar: filmSrc.avatar
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage film={film} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};



export default App;

App.propTypes = {
  settings: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};
