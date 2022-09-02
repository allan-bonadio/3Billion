/*
** ChromoInGenome -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import {navigateIn} from '../ThreeBillion.js';

function ChromoInGenome(props) {
	const {theChromo} = props;
	const name = theChromo.name;
	let icon = <img className='chromoIcon'
				src={`chromos/ch${name}.png`}
				alt={'chromosome '+ name} />;

	return (<>
		<div className='ChromoInGenome' key={name}
				onClick={ev => navigateIn('chromo', theChromo)}>
			<div className='cover clickable' />
				{icon}
			<div>{name}</div>
		</div>
	</>);
}

ChromoInGenome.propTypes = {
	theChromo: PropTypes.instanceOf(chromo).isRequired,
	theGenome: PropTypes.instanceOf(genome).isRequired,
};
export default ChromoInGenome;
