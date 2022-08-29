/*
** AnArm -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { FixedSizeList as List } from 'react-window';

import AGene from '../gene/AGene.js';
import GeneInArm from './GeneInArm.js';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from './arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';


const Row = ({index, style, data}) => {
	let theArm = data;
	let theGene = theArm.list[index];
	return <GeneInArm theGene={theGene} theArm={theArm}
		key={theGene.name} index={index} style={style} />;
}

function AnArm(props) {
	let {theArm} = props;
	let name = theArm.name;

	theArm.populate();
console.info(`theArm.list: `, theArm.list);

	return (<>
		AnArm
		<List
			itemCount={theArm.list.length}
			itemData={theArm}
			itemSize={20}
			width={250}
			height={400}
			className='AnArm'
		>
			{Row}
		</List>
	</>);
}

AnArm.propTypes = {
	theArm: PropTypes.instanceOf(arm).isRequired,
};

export default AnArm;


