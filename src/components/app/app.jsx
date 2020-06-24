import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeMoviePage: null
    };

    this.setActiveMoviePage = this.setActiveMoviePage.bind(this);
  }

  _renderApp() {
    let id = this.state.activeMoviePage;

    if (this.props.films[id]) {
      return (<MoviePage
        film={this.getFilm(id)}
      />);
    } else {
      return (<Main
        settings={this.props.settings}
        films={this.props.films}
        setActiveMoviePage={this.setActiveMoviePage}
      />);
    }
  }

  setActiveMoviePage(id) {
    this.setState({
      activeMoviePage: id
    });
  }

  getFilm(id) {
    let filmSrc = this.props.films[id];
    return {
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
  }

  render() {


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage film={this.getFilm(0)} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

App.propTypes = {
  settings: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};
