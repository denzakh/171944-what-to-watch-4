import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

let testSettings = {
  settings: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: `2014`
  },
  films: []
};

describe(`App component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <App
          settings={props.settings}
          films={films}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
