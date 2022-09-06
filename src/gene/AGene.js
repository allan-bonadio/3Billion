/*
** AGene -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable eqeqeq, no-restricted-globals */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { FixedSizeList as List } from 'react-window';

import CodonInGene from './CodonInGene.js';
import BackButton from '../BackButton.js';

import gene from './gene.js';

let currentSelectedIndex;
let currentSetSelectedIndex;

// each row
const Row = ({index, style, data}) => {
	let theGene = data;
	let theCodon = theGene.list[index];
	return <CodonInGene theCodon={theCodon} theGene={theGene}
		style={style}
		key={index} index={index}
		selected={index == currentSelectedIndex}
		onClick={ev => currentSetSelectedIndex(index)} />;
}

// an entire gene, listing all its codons.  whew, too many.
function AGene(props) {
	let {theGene, style} = props;
	let [selectedIndex, setSelectedIndex] = useState(0);
	currentSelectedIndex = selectedIndex;
	currentSetSelectedIndex = setSelectedIndex;

	theGene.populate();
	//console.info(`theGene.list: `, theGene.list);

	// wish i could use a CSS value for this but the list has to figure heights of elements
	let heightWeWant = document.body.parentElement.clientHeight - 80;
	if (typeof visualViewport != 'undefined')
		heightWeWant = visualViewport.height - 80;

	return (<div id='gene' className='AGene viewingPanel'  key='gene' style={style}>
		<BackButton title='Arm' level='gene' />
		<h3>Gene {theGene.name}</h3>
		<List
			itemCount={theGene.list.length}
			itemData={theGene}
			itemSize={20}
			width={250}
			height={heightWeWant}
			className='geneList longList'
		>
			{Row}
		</List>

	</div>);
}

AGene.propTypes = {
	theGene: PropTypes.instanceOf(gene).isRequired,
	style: PropTypes.object.isRequired,
};

export default AGene;
