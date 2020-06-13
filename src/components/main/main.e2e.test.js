import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

let testSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  filmTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  handleCardTitleClick: ()=>{}
};

describe(`Main e2e`, ()=>{
  it(`should call handlerStart on start button click event`, ()=>{
    const handleCardTitleClick = jest.fn();

    const mainComponent = shallow(
        <Main
          title={testSettings.title}
          genre={testSettings.genre}
          year={testSettings.year}
          filmTitles={testSettings.filmTitles}
          handleCardTitleClick={testSettings.handleCardTitleClick}
        />
    );

    const cardTitle = mainComponent.find(`.small-movie-card__title`);
    console.dir(cardTitle);
  //   startBtn.simulate(`click`);

  //   expect(onStartBtnClick).toHaveBeenCalledTimes(1);
  });
});
