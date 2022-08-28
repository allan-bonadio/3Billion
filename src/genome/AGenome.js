/*
** AGenome -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ChromoInGenome from './ChromoInGenome.js';
import genome from './genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import formulate from '../formulate.js';

const form = formulate(43);

function AGenome(props) {
	const [genome, setGenome] = useState(props.genome);

	let chromos = genome.list.map(ch => <ChromoInGenome name={`${ch.name}`} key={ch.name} />)

	return (<>
		<div className='AGenome'>
			<p>Choose which chromosome to look at.</p>
			{chromos}
			<br clear='left' />
		</div>
	</>);
}

AGenome.propTypes = {
	genome: PropTypes.instanceOf(genome).isRequired,
};

export default AGenome;
