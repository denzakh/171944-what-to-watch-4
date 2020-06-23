import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

let testFilm = {
  title: `The Godfather`,
  poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
  href: `/`
};

describe(`Card component`, ()=>{
  it(`should render Card component markup`, () => {
    const tree = renderer.create(
        <Card film={testFilm} onMouseEnter={()=>{}} onMouseLeave={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
