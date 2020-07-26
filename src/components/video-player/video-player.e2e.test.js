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

  it(`test isPlaying props`, ()=>{

    HTMLVideoElement.prototype.play = jest.fn(() => Promise.resolve());
    const wrapper = mount(<VideoPlayer
      src={film.src}
      poster={film.poster}
      width={210}
      height={175}
      isMuted={false}
      isPlaying={false}
    />);

    expect(HTMLVideoElement.prototype.play).toHaveBeenCalledTimes(0);
    wrapper.setProps({isPlaying: true});
    expect(HTMLVideoElement.prototype.play).toHaveBeenCalledTimes(1);

    HTMLVideoElement.prototype.play.mockRestore();
  });
});

