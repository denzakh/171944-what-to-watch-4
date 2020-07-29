import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";
import genres from "../../mocks/genre-list.js";


describe(`Main Snapshot`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
        <GenreList
          currentGenre={`All genres`}
          genreList={genres}
          setCurrentGenre={()=>{}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
