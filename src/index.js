import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "react-loading-skeleton/dist/skeleton.css";
// Project dipendence css
import "./__assets/css/meanmenu.css";
import "./__assets/css/animate.min.css";
// import "./__assets/css/flaticon.css";
import "./__assets/css/swiper-bundle.css";
import "./__assets/css/backToTop.css";
import "./__assets/css/magnific-popup.css";
// import "./__assets/css/ui-range-slider.css";
import "./__assets/css/nice-select.css";
import "./__assets/css/fontAwesome5Pro.css";
// import "./__assets/css/flaticon.css";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./__assets/css/default.css";
import "./__assets/css/style.css";
import "./styles/GlobalStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import Helper from "./helper/Helper";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helper>
      <Router>
        <App />
      </Router>
    </Helper>
  </React.StrictMode>
);
