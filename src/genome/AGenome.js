/*
** AGenome -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ChromoInGenome from './ChromoInGenome.js';
import BackButton from '../BackButton.js';

import genome from './genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

function AGenome(props) {
	let {theGenome} = props;
	let name = theGenome.name;

	theGenome.populate();
	//console.info(`theGenome.list: `, theGenome.list);
	let chromos = theGenome.list.map(theChromo =>
		<ChromoInGenome theChromo={theChromo} theGenome={theGenome} key={theChromo.name} />);

	return (
		<div className='AGenome' key='genome'
				onMouseMove={ev => ev.preventDefault()}>
			<h3>Genome for {name}</h3>
			<p>Choose which chromosome to explore:</p>
			{chromos}
			<br clear='left' />
		</div>
	);
}

AGenome.propTypes = {
	theGenome: PropTypes.instanceOf(genome).isRequired,
};

export default AGenome;
