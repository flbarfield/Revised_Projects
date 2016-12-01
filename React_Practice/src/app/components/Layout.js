import React from "react";
import Header from "./header";
import Body from "./body";
import FootMusicBar from "./FootMusicBar";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import SongList from "./SongList";

// route path needs to be "/"" for local
// songs for local

// for live, "/Past_Projects/Band_stream/dist/index.html" for header
// "/Past_Projects/Band_stream/dist/index.html/songs" for SL

export default class Layout extends React.Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Header}>
          <IndexRoute component={Body}/>
          <Route path={"/foot-mu"} component={FootMusicBar}/>
          <Route path={"/songs"} component={SongList}/>
        </Route>
      </Router>
    );
  }
}
