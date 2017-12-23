'use strict';

import React, { Component } from 'react';
import './NavButton.css';

class NavButton extends Component {
	render() {
	    return (
			<button className='button' onClick={() => alert()}>button</button>
		);
	}
}

export default NavButton;