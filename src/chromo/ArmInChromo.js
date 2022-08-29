/*
** ArmInChromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from './chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';






const topHeight = {
	pter: [0, 80],
	p: [80, 88],
	cen: [168, 80],
	q: [248, 440],
	qter: [688, 80],
};



function ArmInChromo(props) {
	let {name} = props;

	// we figure out where we should be from the name
	let [chHeight, side] = name.split('_');

	let [top, height] = topHeight[chHeight];
	let left = ('L' == side) ? 0 : 185;
	let style = {top, height, left};


	return (<>
		<div className={`ArmInChromo ${name}`} style={style} >
			ArmInChromo {name}
		</div>
	</>);
}

ArmInChromo.propTypes = {
	theArm: PropTypes.instanceOf(arm).isRequired,
	theChromo: PropTypes.instanceOf(chromo).isRequired,
};

export default ArmInChromo;
