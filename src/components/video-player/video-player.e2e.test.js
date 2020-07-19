import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";
import films from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter()
});

let film = films[0];

describe(`VideoPlayer e2e`, ()=>{

  it(`should isPlaying is false in props`, ()=>{

    const wrapper = mount(
        <VideoPlayer
          src={film.src}
          poster={film.poster}
          width={210}
          height={175}
          isPlaying={false}
          isMuted={false}
        />
    );

    expect(wrapper.props().isPlaying).toEqual(false);
  });

  it(`should isPlaying is true in props`, ()=>{

    const wrapper = mount(
        <VideoPlayer
          src={film.src}
          poster={film.poster}
          width={210}
          height={175}
          isPlaying={true}
          isMuted={false}
        />
    );

    expect(wrapper.props().isPlaying).toEqual(true);
  });
});

