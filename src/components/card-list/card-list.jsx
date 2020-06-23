import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Card from "../card/card";

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
        {films.map((card)=>{
          let film = {
            title: card.Title,
            poster: card.Poster,
            href: card.LocalPage
          };
          return (<Card key={card.Title} film={film} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />);
        })}
      </div>
    );
  }
}

export default CardList;

CardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        LocalPage: PropTypes.string.isRequired
      })
  ).isRequired
};