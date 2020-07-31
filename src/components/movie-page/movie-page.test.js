import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import films from "../../mocks/films";

describe(`MoviePage component`, ()=>{
  it(`should render MoviePage component markup`, () => {
    const tree = renderer.create(
        <MoviePage
          film={films[0]}
          films={[]}
          onActiveMoviePageChange={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
