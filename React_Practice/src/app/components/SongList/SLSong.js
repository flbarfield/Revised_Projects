import React from "react";

export default class SLSong extends React.Component {
  render() {
    const wave_img = <img className="wave" src="./app/images/wave.png"/>

    return(
      <div className="song col-xs-12">
        <div className="so-content-wrap col-xs-12">
          <div className="so-img-wrap col-xs-12 col-md-3">
            {this.props.sl_img}
          </div>
          <div className="song-info">
            <h1>Lorem ipsum dolor</h1>
            <h2>Pellentesque habitant morbi</h2>
          </div>
          <div className="so-playbar col-md-5">
            <audio controls className="audio-controls">
              {this.props.sl_song}
            </audio>
            <div className="song-bot col-md-12">
              <i className="fa fa-play"></i><span>5:53</span>
              <i className="fa fa-headphones"></i><span>958,985</span>
              <i className="fa fa-heart"></i><span>1,345</span>
              <i className="fa fa-download"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
