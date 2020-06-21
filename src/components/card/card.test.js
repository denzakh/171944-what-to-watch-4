import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

let testSettings = {
  title: `The Godfather`,
  poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
  href: `/`,
  onMouseEnter: ()=>{},
  onMouseLeave: ()=>{}
};

describe(`Card component`, ()=>{
  it(`should render Card component markup`, () => {
    const tree = renderer.create(
        <Card title={testSettings.title} poster={testSettings.poster} href={testSettings.href} onMouseEnter={testSettings.onMouseEnter} onMouseLeave={testSettings.onMouseLeave} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
