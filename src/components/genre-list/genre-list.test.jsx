import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";
import allGenreList from "../../mocks/genre-list.js";

describe(`Main Snapshot`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <GenreList
            cactiveItem={`All genres`}
            allGenreList={allGenreList}
            setActiveItem={()=>{}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
