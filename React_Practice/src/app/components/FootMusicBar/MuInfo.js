import React from "react";

export default class MuInfo extends React.Component {
  onPlayOrPause(){
    let currentTrack = document.getElementById("current-track");

    if (!currentTrack.paused && !currentTrack.ended) {
      currentTrack.pause();
      currentTrack.classList.remove("fa-play");
      currentTrack.classList.add("fa-pause");
      console.log(parseInt(currentTrack.duration/60) + ":" + parseInt(currentTrack.duration%60));
    } else {
      currentTrack.play();
      currentTrack.classList.remove("fa-pause");
      currentTrack.classList.add("fa-play");
    }
  }

  soDuration() {
    let currentTrack = document.getElementById("current-track");
    let footDuration = document.getElementById("footTimeDuration");
    footTimeDuration.innerhtml = currentTrack.duration;
  }

  soTime() {
    let time = document.getElementById("footTime");
  }

  render() {
    return(
      <div>
        <div className="foot-mu-btns col-xs-12">
          <i className="fa fa-backward col-xs-4"></i>
          <i onClick={this.onPlayOrPause.bind(this)} className="fa fa-play col-xs-4"></i>
          <i className="fa fa-fast-forward col-xs-4"></i>
        </div>
        <div className="foot-mu-info col-xs-8">
          <div className="foot-time-info col-xs-8">
            <span id="footTime" className="foot-time">{this.props.footTime}</span>
            <span id="footTimeDuration" className="foot-time-duration"> {this.props.footTimeDuration}</span>
          </div>
          <span className="foot-title col-xs-3">{this.props.title}</span>
        </div>
        <div className="foot-mu-vol col-xs-3">
          <span className="foot-vol-title">Vol: </span>
          <span className="foot-vol">{this.props.vol}</span>
        </div>
      </div>
    );
  }
}
