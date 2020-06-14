import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

let testSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  filmTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  handleCardTitleClick: ()=>{}
};

describe(`Main component`, ()=>{
  it(`should render Main component markup`, () => {
    const tree = renderer.create(
        <Main
          title={testSettings.title}
          genre={testSettings.genre}
          year={testSettings.year}
          filmTitles={testSettings.filmTitles}
          handleCardTitleClick={testSettings.handleCardTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render Main component markup with empty array filmTitles`, () => {
    const tree = renderer.create(
        <Main
          title={testSettings.title}
          genre={testSettings.genre}
          year={testSettings.year}
          filmTitles={[]}
          handleCardTitleClick={testSettings.handleCardTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
