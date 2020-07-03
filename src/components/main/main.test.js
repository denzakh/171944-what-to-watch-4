import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import films from "../../mocks/films";

describe(`Main component`, ()=>{
  it(`should render Main component markup`, () => {
    const tree = renderer.create(
        <Main
          promoFilm={films[0]}
          films={films}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



