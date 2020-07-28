import React from "react";
import PropTypes from "prop-types";
import CardList from "../card-list/card-list";
import GenreList from "../genre-list/genre-list";
import {getAllUniqueGenres} from "../../utils/common-utils";
import {actionCreatorList} from "../../reducer";
import {connect} from "react-redux";

const Main = (props) => {
  const {title, genre, year, bg, poster} = props.promoFilm;

  const films = props.films;
  const setActiveMoviePage = props.setActiveMoviePage;

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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList
            genreList={getAllUniqueGenres(films, 9)}
            setCurrentGenre={props.setCurrentGenre}
            currentGenre={props.currentGenre}
          />
        )}

        <CardList films={films} setActiveMoviePage={setActiveMoviePage} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
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

const mapStateToProps = (state) => {
  return {
    currentGenre: state.currentGenre
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentGenre(genre) {
      dispatch(actionCreatorList.setCurrentGenre());
    }
  }
}

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


Main.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.array.isRequired,
  setActiveMoviePage: PropTypes.func
};
