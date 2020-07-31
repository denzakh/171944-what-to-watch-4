import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";
import allGenreList from "../../mocks/genre-list.js";

describe(`Main Snapshot`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <GenreList
            currentGenre={`All genres`}
            allGenreList={allGenreList}
            onCurrentGenreChange={()=>{}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
