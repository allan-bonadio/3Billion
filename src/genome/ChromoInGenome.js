/*
** ChromoInGenome -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';


function ChromoInGenome(props) {
	const [name, setName] = useState(props.name);

	let images;
	if ((props.name)[0] = )= 			<img className='chromoIcon'
				src={`chromos/ch${props.name}.png`}
				alt={'chromosome '+ props.name} />

	return (<>
		<div className='ChromoInGenome'>
			<div className='cover' />
			{images}
			<div>{props.name}</div>
		</div>
	</>);
}

export default ChromoInGenome;
