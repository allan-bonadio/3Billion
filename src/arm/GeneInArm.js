/*
** GeneInArm -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from './arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import ThreeBillion from '../ThreeBillion.js';

const num = new Intl.NumberFormat();

function GeneInArm(props) {
	let {theGene, theArm, style, index} = props;


	return (<>
		<div className='GeneInArm clickable' style={style}
			onClick={ev => ThreeBillion.navigateIn('gene', theGene)}>
			<span className='rowIndex'>{num.format(index)}</span>
			<span className='rowCodon'>{theGene.name}</span>
		</div>
	</>);
}

GeneInArm.propTypes = {
	theGene: PropTypes.instanceOf(gene).isRequired,
	theArm: PropTypes.instanceOf(arm).isRequired,
	style: PropTypes.object.isRequired,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
};

export default GeneInArm;
