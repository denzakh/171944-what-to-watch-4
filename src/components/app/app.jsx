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

    this.onActiveMoviePageChange = this.onActiveMoviePageChange.bind(this);
  }

  _renderApp() {
    let activeMoviePage = this.state.activeMoviePage;

    if (activeMoviePage) {
      return this._renderActiveMoviePage();
    } else {
      return (<Main
        onActiveMoviePageChange={this.onActiveMoviePageChange}
      />);
    }
  }

  _renderActiveMoviePage() {
    if (this.state.activeMoviePage) {
      return <MoviePage
        film={this.state.activeMoviePage}
        films={this.props.films}
        onActiveMoviePageChange={this.onActiveMoviePageChange}
      />;
    } else {
      return null;
    }
  }

  onActiveMoviePageChange(film) {
    this.setState({
      activeMoviePage: film
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            {this._renderActiveMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
