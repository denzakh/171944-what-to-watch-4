import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import films from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`SmallMovieCard e2e`, ()=>{

  it(`should call onMouseEnter on hover card`, ()=>{
    const onMouseEnter = jest.fn();

    const wrapper = mount(
        <SmallMovieCard film={films[0]} isPlaying={false} onMouseEnter={onMouseEnter} onMouseLeave={()=>{}} onClick={()=>{}} />
    );

    wrapper.simulate(`mouseenter`, films[0]);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`should call onMouseLeave on hover card`, ()=>{
    const onMouseLeave = jest.fn();

    const wrapper = mount(
        <SmallMovieCard film={films[0]} isPlaying={false} onMouseEnter={()=>{}} onMouseLeave={onMouseLeave} onClick={()=>{}} />
    );

    wrapper.simulate(`mouseleave`, films[0]);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});

