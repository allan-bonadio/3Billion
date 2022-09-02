/*
** BackButton -- simple button on each panel to navigate upward
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {navigateOut, isNarrowScreen} from './ThreeBillion.js';


function BackButton(props) {
	function handleClick(ev) {
		navigateOut(props.level);
	}

	const arrow = isNarrowScreen ? '❮ ' : '⇧';  // or try ⬆

	return (
		<button className='BackButton clickable' onClick={handleClick} >
			<big>{arrow} </big> {props.title}
		</button>
	);
}

BackButton.propTypes = {
	title: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
};

export default BackButton;
