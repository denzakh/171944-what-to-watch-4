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
    let activeMoviePage = this.state.activeMoviePage;

    if (activeMoviePage) {
      return (<MoviePage
        film={activeMoviePage}
      />);
    } else {
      return (<Main
        promoFilm={this.props.promoFilm}
        films={this.props.films}
        setActiveMoviePage={this.setActiveMoviePage}
      />);
    }
  }

  _renderActiveMoviePage() {
    if (this.state.activeMoviePage) {
      return <MoviePage film={this.state.activeMoviePage} />;
    } else {
      return null;
    }
  }

  setActiveMoviePage(film) {
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

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};
