/*
** CodonInGene -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from './gene.js';
import codon from '../codon/codon.js';

import {navigateIn} from '../ThreeBillion.js';

const num = new Intl.NumberFormat();

function CodonInGene(props) {
	let {theCodon, theGene, style, index} = props;
	// index here is the codon number, not the base number.  x3

	return (<>
		<div className='CodonInGene clickable' style={style} >
			<span className='rowIndex'>{num.format(3 * index)}</span>
			<span className='rowCodon'>{theCodon.name}</span>
			<span className='rowAmino'>{theCodon.amino}</span>
		</div>
	</>);
}

CodonInGene.propTypes = {
	theCodon: PropTypes.instanceOf(codon).isRequired,
	theGene: PropTypes.instanceOf(gene).isRequired,
	style: PropTypes.object.isRequired,
};
export default CodonInGene;
