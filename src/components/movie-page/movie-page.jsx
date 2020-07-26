import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Tabs from "../tabs/tabs.jsx";
import TabOverview from "../tabs/tab-overview.jsx";
import TabDetails from "../tabs/tab-details.jsx";
import TabReviews from "../tabs/tab-reviews.jsx";

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

  getRating(num) {
    let level = `--`;

    switch (Math.floor(+num)) {
      case 0:
      case 1:
      case 2:
        level = `Bad`;
        break;
      case 3:
      case 4:
        level = `Normal`;
        break;
      case 5:
      case 6:
      case 7:
        level = `Good`;
        break;
      case 8:
      case 9:
        level = `Very good`;
        break;
      case 10:
        level = `Awesome`;
        break;
      default:
        level = `--`;
        break;
    }

    return level;
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
          ratingLevel={this.getRating(+imdbRating)}
          imdbVotes={imdbVotes}
          director={director}
          actors={actors}
          plot={plot}
        />;
    }
  }

  render() {
    const {title, year, genre, poster, bg, bgcolor, avatar} = this.props.film;

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
                  <span className="movie-card__genre">{genre}</span>
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
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__movies-list">
              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
                </h3>
              </article>
              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width={280} height={175} />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
                </h3>
              </article>
              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/macbeth.jpg" alt="Macbeth" width={280} height={175} />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
                </h3>
              </article>
              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/aviator.jpg" alt="Aviator" width={280} height={175} />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
                </h3>
              </article>
            </div>
          </section>
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
    genre: PropTypes.string.isRequired,
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
  }).isRequired
};
