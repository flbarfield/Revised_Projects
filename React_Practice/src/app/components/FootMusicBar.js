import React from "react";
import MuInfo from "./FootMusicBar/MuInfo";

export default class FootMusicBar extends React.Component {
  constructor() {
    super();
    this.state = {
      footTimeDuration: "0:00",
      footTime: "0:00 / ",
      title: "N/A",
      vol: "0"
    };
  }

  componentDidMount() {
    let currentTrack = document.getElementById("current-track");
    let footDuration = document.getElementById("footTimeDuration");

    let totalTrackTime = (parseInt(currentTrack.duration/60) + ":" + parseInt(currentTrack.duration%60)).toString();

    this.setState({
      footTimeDuration: "0:00"
    });
  }


  render() {

    return(
      <div className="foot-mu">
        <audio id="current-track">
          <source src="./app/audio/Nymphaeum-part1-2.mp3" type="audio/mp3"></source>
        </audio>
        <nav className="foot-wrap">
          <div className="default-bar container">
            <div className="progress-bar">
              <div className="filling-bar"></div>
            </div>
            <MuInfo footTime={this.state.footTime} footTimeDuration={this.state.footTimeDuration} title={this.state.title} vol={this.state.vol}/>
          </div>
        </nav>
      </div>
    );
  }
}
