import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import films from "../../mocks/films";

describe(`Card component`, ()=>{
  it(`should render SmallMovieCard component markup`, () => {
    const tree = renderer.create(
        <SmallMovieCard film={films[0]} isPlaying={false} onMouseEnter={()=>{}} onMouseLeave={()=>{}} onClick={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
