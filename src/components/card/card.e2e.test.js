import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";

Enzyme.configure({
  adapter: new Adapter()
});

let testFilm = {
  title: `The Godfather`,
  poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
  href: `/`
};

describe(`Card e2e`, ()=>{
  it(`should Card render`, ()=>{
    const wrapper = shallow(
        <Card film={testFilm} onMouseEnter={()=>{}} onMouseLeave={()=>{}} />
    );

    expect(wrapper.exists(`.small-movie-card`)).toBe(true);
  });

  it(`should call onHover on hover card`, ()=>{
    const onMouseEnter = jest.fn();

    const wrapper = shallow(
        <Card film={testFilm} onMouseEnter={onMouseEnter} onMouseLeave={()=>{}} />
    );

    wrapper.simulate(`mouseenter`, testFilm);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(testFilm);
  });
});

