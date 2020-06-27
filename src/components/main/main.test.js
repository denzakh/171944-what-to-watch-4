import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import films from "../../mocks/films";

console.dir(films);

let testSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

describe(`Main component`, ()=>{
  it(`should render Main component markup`, () => {
    const tree = renderer.create(
        <Main
          settings={testSettings}
          films={films}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



