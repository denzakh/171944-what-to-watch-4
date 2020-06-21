import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

let testSettings = {
  settings: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: `2014`,
  },
  films: []
};

describe(`Main component`, ()=>{
  it(`should render Main component markup`, () => {
    const tree = renderer.create(
        <Main
          settings={testSettings.settings}
          films={testSettings.films}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
