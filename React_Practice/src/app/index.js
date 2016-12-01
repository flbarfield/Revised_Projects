// __webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/"
import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import "./scss/style.scss";

import Layout from "./components/Layout";

const app = document.getElementById('app');
render(<Layout/>, app);
