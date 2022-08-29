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


function ChromoInGenome(props) {
	const {theChromo} = props;
	const name = theChromo.name;
	let images;
	if (name[0] != 'x') {
		images = <img className='chromoIcon'
				src={`chromos/ch${name}.png`}
				alt={'chromosome '+ name} />;
	}
	else {
		let xory = name[1];
		let XORY = xory.toUpperCase();
		images = [
			<img className='chromoIcon leftX' key='LX'
				src={`chromos/xLeft.png`}
				alt={'chromosome X'} />,
			<img className={`chromoIcon right${XORY}`} key='RXY'
				src={`chromos/${xory}Right.png`}
				alt={`chromosome ${XORY}`} />
		];
	}

	return (<>
		<div className='ChromoInGenome' key={name} >
			<div className='cover' />
			{images}
			<div>{name}</div>
		</div>
	</>);
}

ChromoInGenome.propTypes = {
	theChromo: PropTypes.instanceOf(chromo).isRequired,
	theGenome: PropTypes.instanceOf(genome).isRequired,
};
export default ChromoInGenome;
