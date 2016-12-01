import React from "react";
import SLSong from "./SongList/SLSong";

// for live: /Past_Projects/Band_stream/dist/app/
// also live: /Past_Projects/Band_stream/dist/app/audio/
// for local:  .app/

export default class SongList extends React.Component {
  render() {
    const so_img_list = [
      <img className="so_img" src="./app/images/crazy_colors.jpg"/>,
      <img className="so_img" src="./app/images/cyclops.jpg"/>,
      <img className="so_img" src="./app/images/grumps.jpg"/>,
      <img className="so_img" src="./app/images/masked_animals.jpg"/>
    ]

    const so_audio_list = [
      <source src="./app/audio/Nymphaeum-part1-2.mp3"></source>,
      <source src="./app/audio/Extremes.mp3"></source>,
      <source src="./app/audio/Stargazer.mp3"></source>,
      <source src="./app/audio/theCalling.mp3"></source>
    ]

    return(
      <div id='song_list'>
        <SLSong sl_img={so_img_list[0]} sl_song={so_audio_list[0]}/>
        <SLSong sl_img={so_img_list[1]} sl_song={so_audio_list[1]}/>
        <SLSong sl_img={so_img_list[2]} sl_song={so_audio_list[2]}/>
        <SLSong sl_img={so_img_list[3]} sl_song={so_audio_list[3]}/>
      </div>
    );
  }
}
