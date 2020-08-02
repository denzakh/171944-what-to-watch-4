import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreList from "./genre-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all tabs be pressed`, () => {
  const setCurrentGenre = jest.fn();

  const event = {
    preventDefault() {}
  };

  const allGenreList = [`All genres`, `Comedy`, `Action`];
  const currentGenre = allGenreList[0];

  const genreListComponent = shallow(
      <GenreList
        activeItem={currentGenre}
        allGenreList={allGenreList}
        setActiveItem={setCurrentGenre}
      />
  );

  const genreLinkList = genreListComponent.find(`.catalog__genres-link`);
  genreLinkList.forEach((link) => link.simulate(`click`, event));
  expect(setCurrentGenre).toHaveBeenCalledTimes(3);

  expect(setCurrentGenre.mock.calls[2][0]).toEqual(`Action`);
});
