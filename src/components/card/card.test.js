import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";
import films from "../../mocks/films";

describe(`Card component`, ()=>{
  it(`should render Card component markup`, () => {
    const tree = renderer.create(
        <Card film={films[0]} id={`0`} onMouseEnter={()=>{}} onMouseLeave={()=>{}} onClick={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
