/*
** AChromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ArmInChromo from './ArmInChromo.js';

import genome from '../genome/genome.js';
import chromo from './chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import {codonToAmino} from '../dnaData.js';

import armsInChromoImage from './armsInChromo2.png';


function AChromo(props) {
	let {formula, theChromo} = props;
	let name = theChromo.name;

	theChromo.populate();
console.info(`theChromo.list: `, theChromo.list);
	let arms = theChromo.list.map(theArm =>
		<ArmInChromo theArm={theArm} theChromo={theChromo} key={theArm.name} />);

	return (<>
		<div className='AChromo'>
			<img src={armsInChromoImage} />
			<div style={{width: '100%', textAlign: 'center', position: 'absolute'}} >
				AChromo</div>

			<ArmInChromo name='pter_L' key='pter_L' />
			<ArmInChromo name='p_L' key='p_L' />
			<ArmInChromo name='cen_L' key='cen_L' />
			<ArmInChromo name='q_L' key='q_L' />
			<ArmInChromo name='qter_L' key='qter_L' />

			<ArmInChromo name='pter_R' key='pter_R' />
			<ArmInChromo name='p_R' key='p_R' />
			<ArmInChromo name='cen_R' key='cen_R' />
			<ArmInChromo name='q_R' key='q_R' />
			<ArmInChromo name='qter_R' key='qter_R' />


		</div>
	</>);
}

AChromo.propTypes = {
	theChromo: PropTypes.instanceOf(chromo).isRequired,
};

export default AChromo;
