import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

let testSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  filmTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  handleCardTitleClick: ()=>{}
};

describe(`App component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <App
          title={testSettings.title}
          genre={testSettings.genre}
          year={testSettings.year}
          filmTitles={testSettings.filmTitles}
          handleCardTitleClick={testSettings.handleCardTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
