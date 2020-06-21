import React from "react";
import renderer from "react-test-renderer";
import CardList from "./card-list";

let testSetting = {
  films: [{
    Title: `The Godfather`,
    Poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
    LocalPage: `/`
  },
  {
    Title: `Knives Out`,
    Poster: `https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg`,
    LocalPage: `/`
  }]
}

describe(`Card component`, ()=>{
  it(`should render Card component markup`, () => {
    const tree = renderer.create(
      <CardList films={testSetting.films} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
