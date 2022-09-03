/*
** BackButton -- simple button on each panel to navigate upward
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ThreeBillion from './ThreeBillion.js';

function BackButton(props) {
	function handleClick(ev) {
		ThreeBillion.navigateOut(props.level);
	}

	const arrow = ThreeBillion.isNarrowScreen ? '❮ ' : '⇧';  // or try ⬆

	return (
		<button className='BackButton clickable' onClick={handleClick} >
			<big>{arrow} </big> {props.title}
		</button>
	);
}

BackButton.propTypes = {
	// the title of the level above where you are, one above the level
	title: PropTypes.string.isRequired,

	// the level that you are at, one below the title
	level: PropTypes.string.isRequired,
};

export default BackButton;
