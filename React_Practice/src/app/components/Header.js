import React from "react";
import {Link} from "react-router";

// const icon = {
//   <i src="./app/images/rockin.jpg"></i>
// }


export default class Header extends React.Component {
  render() {
    const headImgStyle = {
      backgroundImage: "url('./app/images/largeband.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      height: "25em"
    };


    return (
      <div className="header-elements">
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header col-xs-12">
              <ul className="nav navbar-nav">
                <li><Link to={"/"} activeClassName={"active"}>Home</Link></li>
                <li><Link to={"/songs"} activeClassName={"active"}>Song Archive</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron">
          <h1>Welcome to Musicitude</h1>
        </div>
        <div className="head-img" style={headImgStyle}>
          <h2>Feed<br/>Your<br/>Creativity</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}
