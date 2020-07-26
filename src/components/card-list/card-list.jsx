import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const SmallMovieCardWrapped = withVideoPlayer(SmallMovieCard);

class CardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const films = this.props.films;

    return (
      <div className="catalog__movies-list">
        {films.map((film)=>{
          return (<SmallMovieCardWrapped
            key={film.title}
            film={film}
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
