/*
** AGene -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { FixedSizeList as List } from 'react-window';

import CodonInGene from './CodonInGene.js';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from './gene.js';
import codon from '../codon/codon.js';

// each row
const Row = ({index, style, data}) => {
	let theGene = data;
	let theCodon = theGene.list[index];
	return <CodonInGene theCodon={theCodon} theGene={theGene}
		key={index} index={index} style={style} />;
}

// an entire gene, listing all its codons.  whew, too many.
function AGene(props) {
	let {formula, theGene} = props;
	let name = theGene.name;

	theGene.populate();
console.info(`theGene.list: `, theGene.list);
// 	let codons = theGene.list.map((theCodon, ix) =>
// 		<CodonInGene theCodon={theCodon} theGene={theGene} key={ix} style={{}}/>);

	return (<>
		A Gene
		<List
			itemCount={theGene.list.length}
			itemData={theGene}
			itemSize={20}
			width={250}
			height={400}
			className='AGene'
		>
			{Row}
		</List>

	</>);
}

AGene.propTypes = {
	theGene: PropTypes.instanceOf(gene).isRequired,
};

export default AGene;
