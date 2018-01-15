import React, { Component } from 'react';
import './App.css';

class App extends Component {
  	render() {
    	return (
      		<div className="background">
        		<div className="area">
          			<div className="white heading">Joseph B. Higgs V <span role="img" aria-label="construction">👨‍💻</span></div>
        		    <div className="white icons">
                    <a href="https://www.github.com/joehiggs" target="_blank">
                        <i className="fa fa-2x fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/higgsvio" target="_blank">
                        <i className="fa fa-2x fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="http://www.opico.io" target="_blank">
                        <i className="fa fa-2x fa-map-marker" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
      		</div>
    	);
  	}
}

export default App;
