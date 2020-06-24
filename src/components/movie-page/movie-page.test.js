import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const film = {
  actors: `Marlon Brando, Al Pacino, James Caan, Richard S. Castellano`,
  director: `Francis Ford Coppola`,
  genre: `Crime, Drama`,
  plot: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
  poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
  title: `The Godfather`,
  year: `1972`,
  imdbRating: `9.2`,
  imdbVotes: `1,546,461`,
  avatar: `https://theotherboard.com/forum/uploads/profile/photo-1692.png`,
  bg: `https://66.media.tumblr.com/9a9ee3ab320563f95e85c793e366053b/tumblr_nqrumn1CfN1rf1jvro1_1280.jpg`,
  bgcolor: `#edd89a`
};

describe(`MoviePage component`, ()=>{
  it(`should render MoviePage component markup`, () => {
    const tree = renderer.create(
        <MoviePage film={film} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
