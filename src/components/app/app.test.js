import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

let testSettings = {
  settings: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: `2014`
  },
  films: [
    {
      Actors: `Marlon Brando, Al Pacino, James Caan, Richard S. Castellano`,
      Director: `Francis Ford Coppola`,
      Genre: `Crime, Drama`,
      Plot: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
      Poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
      Title: `The Godfather`,
      Year: `1972`,
      imdbRating: `9.2`,
      imdbVotes: `1,546,461`,
      avatar: `https://theotherboard.com/forum/uploads/profile/photo-1692.png`,
      bg: `https://66.media.tumblr.com/9a9ee3ab320563f95e85c793e366053b/tumblr_nqrumn1CfN1rf1jvro1_1280.jpg`,
      bgcolor: `#edd89a`,
      LocalPage: `/`
    }
  ]
};

describe(`App component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <App
          settings={testSettings.settings}
          films={testSettings.films}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
