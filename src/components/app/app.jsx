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
        film={this.props.films[id]}
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

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage film={this.props.films[0]} />
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
