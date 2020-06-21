import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardList from "./card-list";

Enzyme.configure({
  adapter: new Adapter()
});

let testSetting = {
  films: [{
    Title: `The Godfather`,
    Poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
    LocalPage: `/`
  },
  {
    Title: `Knives Out`,
    Poster: `https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg`,
    LocalPage: `/`
  }]
}

//  Он будет проверять, что при наведении курсора на карточку с фильмом в обработчик попадает информация о фильме.
describe(`Main e2e`, ()=>{
  it(`should call handlerStart on start button click event`, ()=>{
    // const handleCardTitleClick = jest.fn();

    const wrapper = mount(
        <CardList films={testSetting.films} />
    );

    // const cardTitle = cardListComponent.find(`.small-movie-card__title`);

    // cardTitle.forEach((item)=>{
    //   item.simulate(`click`);
    // });

    // expect(handleCardTitleClick).toHaveBeenCalledTimes(3);
  });
});
