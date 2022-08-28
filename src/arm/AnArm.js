/*
** AnArm -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import AGene from '../gene/AGene.js';
import GeneInArm from './GeneInArm.js';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from './arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';


function AnArm(props) {
	const [name, setName] = useState('8');


	return (<>
		<div>
			AnArm
		</div>
	</>);

	// why doesn't this import work?
	//			<GeneInArm />

}

export default AnArm;
