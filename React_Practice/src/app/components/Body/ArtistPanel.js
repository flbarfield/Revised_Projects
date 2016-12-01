import React from "react";
import Pan_image from "./ArtistPanel/Pan_image";
import {Link} from "react-router";

// link needs to be /Past_Projects/Band_stream/dist/index.html for live

export default class ArtistPanel extends React.Component {
  render() {
    return (
      <div className="artist-panel col-xs-12 col-md-4">
        <div className="inner-artist-wrap col-xs-12">
          <div className="mu-img-wrap col-xs-12"><Link to={"/songs"}>
            <Pan_image pan_image={this.props.pan_image}/>
          </Link></div>
          <div className="mu-info col-xs-12">
            <h3 className="artist">Lorem ipsum dolor</h3>
            <p className="title">Nunc sed erat ac diam</p>
            <div className="ctrl-btn">
              <div className="col-xs-4">
                <i className="fa fa-play"></i>
              </div>
              <span className="runtime col-xs-4">05:05</span>
              <div className="col-xs-4 right-btn-wrap">
                <i className="fa fa-download"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
