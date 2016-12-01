import React from "react";
import ArtistPanel from "./Body/ArtistPanel";

export default class Body extends React.Component {
  render() {
    const pan_image = [
      <img src="./app/images/acoustic.jpg"/>,
      <img src="./app/images/funkydrums.jpg"/>,
      <img src="./app/images/hops.jpg"/>,
      <img src="./app/images/keyboard.jpg"/>,
      <img src="./app/images/saxband.jpg"/>,
      <img src="./app/images/fixedsing.jpg"/>,
      <img src="./app/images/sitacoustic.jpg"/>,
      <img src="./app/images/voice.jpg"/>,
      <img src="./app/images/whitehops.jpg"/>,
      <img src="./app/images/largeband.jpg"/>
    ]

    return (
      <div className="music-choices container-fluid">
        <div className="row">
          <ArtistPanel pan_image={pan_image[0]}/>
          <ArtistPanel pan_image={pan_image[1]}/>
          <ArtistPanel pan_image={pan_image[2]}/>
        </div>
        <div className="row">
          <ArtistPanel pan_image={pan_image[3]}/>
          <ArtistPanel pan_image={pan_image[4]}/>
          <ArtistPanel pan_image={pan_image[5]}/>
        </div>
        <div className="row">
          <ArtistPanel pan_image={pan_image[6]}/>
          <ArtistPanel pan_image={pan_image[7]}/>
          <ArtistPanel pan_image={pan_image[8]}/>
        </div>
      </div>
    );
  }
}
