import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import films from "../../mocks/films";

describe(`App component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <App
          promoFilm={films[0]}
          films={films}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
