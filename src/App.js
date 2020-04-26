import React from "react";

import IconButton from "./IconButton";
import "./App.css";

const App = () => {
  return (
    <div className="background">
      <div className="area">
        <div className="white heading">
          Joe Higgs V{" "}
          <span role="img" aria-label="dev-emoji">
            👨‍💻
          </span>
        </div>
        <div className="white">
          <IconButton
            url="https://www.github.com/joehiggs"
            classString="fa fa-2x fa-github"
          />
          <IconButton
            url="https://www.linkedin.com/in/joe-higgs"
            classString="fa fa-2x fa-linkedin"
          />
          <IconButton
            url="https://apps.apple.com/us/app/opico/id1215993252"
            classString="fa fa-2x fa-map-marker"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
