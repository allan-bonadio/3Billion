/*
** ArmInChromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable eqeqeq */

import PropTypes from 'prop-types';

import chromo from './chromo.js';
import arm from '../arm/arm.js';

import ThreeBillion from '../ThreeBillion.js';




const armInfo = {
	pter: [0, '10%', 'teleomere, short end'],
	p: ['10%', '12%', 'short arm'],
	cen: ['22%', '10%', 'centromere'],
	q: ['32%', '56%', 'long arm'],
	qter: ['88%', '10%', 'teleomere, long end'],
};



function ArmInChromo(props) {
	let {theArm} = props;
	let name = theArm.name;

	// we figure out where we should be from the name
	let [armCode, side] = name.split('_');

	let [top, height, titlePiece] = armInfo[armCode];
	let left = ('L' == side) ? 0 : '50%';
	let style = {top, height, left};

	return (<>
		<div className={`ArmInChromo ${name} clickable`} style={style}
			onClick={ev => ThreeBillion.navigateLower('arm', theArm)}>
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
