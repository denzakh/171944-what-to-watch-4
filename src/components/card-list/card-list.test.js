import React from "react";
import renderer from "react-test-renderer";
import CardList from "./card-list";
import films from "../../mocks/films";


describe(`Card component`, ()=>{
  it(`should render Card component markup`, () => {
    const tree = renderer.create(
        <CardList films={films} onActiveMoviePageChange={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
