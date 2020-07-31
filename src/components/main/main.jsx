import React from "react";
import PropTypes from "prop-types";
import CardList from "../card-list/card-list";
import GenreList from "../genre-list/genre-list";
import {getAllUniqueGenres} from "../../utils/common-utils";
import {actionCreatorList} from "../../reducer";
import {connect} from "react-redux";
import {getFilmsGenreLikeThis} from "../../utils/common-utils";
import ShowMoreButton from "../show-more-button/show-more-button";

const Main = (props) => {

  const {films, promoFilm, currentGenre, showMainCardCount, onActiveMoviePageChange, genresListCount} = props;
  const {title, genreList, year, bg, poster} = promoFilm;

  const filmsGenreSorted = getFilmsGenreLikeThis(films, promoFilm, [currentGenre], showMainCardCount);

  const renderMoreButton = () => {
    return <ShowMoreButton onButtonClick={props.onMainCardCountChange} />;
  };

  return <div>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={bg} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList
          allGenreList={getAllUniqueGenres(films, genresListCount)}
          onCurrentGenreChange={props.onCurrentGenreChange}
          currentGenre={props.currentGenre}
        />

        <CardList
          films={filmsGenreSorted}
          onActiveMoviePageChange={onActiveMoviePageChange}
        />

        <div className="catalog__more">
          {renderMoreButton()}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
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
  </div>;
};

Main.defaultProps = {
  genresListCount: 8
};

const mapStateToProps = (state) => {
  return {
    currentGenre: state.currentGenre,
    showMainCardCount: state.showMainCardCount,
    promoFilm: state.promoFilm,
    films: state.films
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentGenreChange(genre) {
      dispatch(actionCreatorList.onCurrentGenreChange(genre));
    },
    onMainCardCountChange() {
      dispatch(actionCreatorList.setMainCardCountChange());
    }
  };
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


Main.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genreList: PropTypes.array.isRequired,
    year: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.array.isRequired,
  onActiveMoviePageChange: PropTypes.func,
  onCurrentGenreChange: PropTypes.func,
  onMainCardCountChange: PropTypes.func,
  showMainCardCount: PropTypes.number.isRequired,
  genresListCount: PropTypes.number,
  currentGenre: PropTypes.string.isRequired
};
