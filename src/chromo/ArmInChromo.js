/*
** ArmInChromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from './chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import ThreeBillion from '../ThreeBillion.js';




const topHeight = {
	pter: [0, '10%', 'teleomere, short end'],
	p: ['10%', '11%', 'short arm'],
	cen: ['22%', '10%', 'centromere'],
	q: ['32%', '57%', 'long arm'],
	qter: ['90%', '10%', 'teleomere, long end'],
};



function ArmInChromo(props) {
	let {theArm} = props;
	let name = theArm.name;

	// we figure out where we should be from the name
	let [armCode, side] = name.split('_');

	let [top, height, titlePiece] = topHeight[armCode];
	let left = ('L' == side) ? 0 : 185;
	let style = {top, height, left};

	let title =  +'<br/>'+ titlePiece;

	return (<>
		<div className={`ArmInChromo ${name} clickable`} style={style}
			onClick={ev => ThreeBillion.navigateIn('arm', theArm)}>
			<div>
				<div>{'L' == side ? 'left ' : 'right '}</div>
				<div>{titlePiece}</div>
				<div>({armCode})</div>
			</div>
		</div>
	</>);
}

ArmInChromo.propTypes = {
	theArm: PropTypes.instanceOf(arm).isRequired,
	theChromo: PropTypes.instanceOf(chromo).isRequired,
};

export default ArmInChromo;
