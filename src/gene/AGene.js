/*
** AGene -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import CodonInGene from './CodonInGene.js';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from './gene.js';
import codon from '../codon/codon.js';


function AGene(props) {
	const [name, setName] = useState('8');


	return (<>
		<div>
			AGene
			<CodonInGene />
		</div>
	</>);
}

export default AGene;
