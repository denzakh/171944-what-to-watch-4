import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`ShowMoreButton click`, () => {
  const onButtonClick = jest.fn();

  const event = {
    preventDefault() {}
  };

  const showMoreButtonComponent = shallow(
      <ShowMoreButton onButtonClick={onButtonClick} />
  );

  const button = showMoreButtonComponent.find(`.catalog__button`);
  button.simulate(`click`, event);
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
