import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import films from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Card e2e`, ()=>{
  it(`should Card render`, ()=>{
    const wrapper = shallow(
        <Card film={films[0]} id={`0`} onMouseEnter={()=>{}} onMouseLeave={()=>{}} onClick={()=>{}} />
    );

    expect(wrapper.exists(`.small-movie-card`)).toBe(true);
  });

  it(`should call onHover on hover card`, ()=>{
    const onMouseEnter = jest.fn();

    const wrapper = shallow(
        <Card film={films[0]} id={`0`} onMouseEnter={onMouseEnter} onMouseLeave={()=>{}} onClick={()=>{}} />
    );

    wrapper.simulate(`mouseenter`, films[0]);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(films[0]);
  });
});

