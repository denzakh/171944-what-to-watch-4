import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

it(`ShowMoreButton is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton onButtonClick={()=>{}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
