import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Tabs from "../tabs/tabs.jsx";
import TabOverview from "../tabs/tab-overview.jsx";
import TabDetails from "../tabs/tab-details.jsx";
import TabReviews from "../tabs/tab-reviews.jsx";
import CardList from "../card-list/card-list";
import {getRating, getFilmsGenreLikeThis} from "../../utils/common-utils";
import settings from "../../settings/settings";

const tabList = [`Overview`, `Details`, `Reviews`];

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeTab: tabList[0]};

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabName) {
    this.setState({
      activeTab: tabName,
    });
  }

  renderTab() {
    const {director, actors, imdbRating, imdbVotes, plot, runtime, genre, year} = this.props.film;

    switch (this.state.activeTab) {
      case `Details`:
        return <TabDetails
          runtime={runtime}
          genre={genre}
          year={year}
          director={director}
          actors={actors}
        />;
      case `Reviews`:
        return <TabReviews />;
      default:
        return <TabOverview
          imdbRating={imdbRating}
          ratingLevel={getRating(+imdbRating)}
          imdbVotes={imdbVotes}
          director={director}
          actors={actors}
          plot={plot}
        />;
    }
  }

  render() {
    const {title, year, genreList, poster, bg, bgcolor, avatar} = this.props.film;
    const films = this.props.films;
    const setActiveMoviePage = this.props.setActiveMoviePage;
    const filmsGenreLikeThis = getFilmsGenreLikeThis(films, genreList, settings.PAGE_CARD_COUNT);

    const getSimularGenreCardList = (filmsGenreLikeThis) => {
      if (filmsGenreLikeThis.length) {
        return (<section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardList films={filmsGenreLikeThis} setActiveMoviePage={setActiveMoviePage} />
        </section>);
      } else {
        return null;
      }
    }

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full" style={{background: bgcolor}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={bg} alt={title} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <div className="user-block">
                <div className="user-block__avatar">
                  <img src={avatar ? avatar : `img/avatar.jpg`} alt="User avatar" width={63} height={63} />
                </div>
              </div>
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genreList.join(`, `)}</span>
                  <span className="movie-card__year">{year}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width={218} height={327} />
              </div>
              <Tabs
                tabList={tabList}
                activeTab={this.state.activeTab}
                onClick={this.handleTabClick}
              >
                {this.renderTab()}
              </Tabs>
            </div>
          </div>
        </section>
        <div className="page-content">
          {getSimularGenreCardList(filmsGenreLikeThis)}
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviePage;

MoviePage.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genreList: PropTypes.array.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
    imdbVotes: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    bg: PropTypes.string,
    bgcolor: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  films: PropTypes.array.isRequired,
  setActiveMoviePage: PropTypes.func
};

