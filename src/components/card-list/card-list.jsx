import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card";

class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(film) {
    this.setState({
      activeCard: film
    });
  }

  onMouseLeave() {
    this.setState({
      activeCard: null
    });
  }

  render() {
    const films = this.props.films;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i)=>{
          return (<SmallMovieCard
            key={film.title}
            id={i.toString()}
            film={film}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.props.setActiveMoviePage} />);
        })}
      </div>
    );
  }
}

export default CardList;

CardList.propTypes = {
  films: PropTypes.array.isRequired,
  setActiveMoviePage: PropTypes.func
};
