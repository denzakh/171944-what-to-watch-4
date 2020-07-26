import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import films from "../../mocks/films";

describe(`VideoPlayer component`, ()=>{
  it(`should render VideoPlayer component markup`, () => {
    let film = films[0];

    function createNodeMock(element) {
      if (element.type === `video`) {
        return {
          onplay: () => {},
          onpause: () => {},
          ontimeupdate: () => {},
          src: ``
        };
      }
      return null;
    }

    const options = {createNodeMock};
    const tree = renderer.create(
        <VideoPlayer
          src={film.src}
          poster={film.poster}
          width={210}
          height={175}
          isPlaying={false}
          isMuted={false}
        />,
        options
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
