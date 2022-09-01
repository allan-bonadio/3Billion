/*
** BackButton -- simple button on each panel to navigate upward
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {navigateOut} from './ThreeBillion.js';


function BackButton(props) {
	function handleClick(ev) {
		navigateOut();
	}

	return (
		<button className='BackButton clickable' onClick={handleClick} >
			<big>❮  </big> {props.title}
		</button>
	);
}

BackButton.propTypes = {
	title: PropTypes.string.isRequired,
};

export default BackButton;
