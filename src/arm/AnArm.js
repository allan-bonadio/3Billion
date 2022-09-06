/*
** AnArm -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable eqeqeq */

import React from 'react';
import PropTypes from 'prop-types';

import { FixedSizeList as List } from 'react-window';

import GeneInArm from './GeneInArm.js';
import BackButton from '../BackButton.js';

import arm from './arm.js';

// i really should modularize this index selection stuff
let currentSelectedIndex;
let currentSetSelectedIndex;

const Row = ({index, style, data}) => {
	let theArm = data;
	let theGene = theArm.list[index];
	return <GeneInArm theGene={theGene} theArm={theArm}
		style={style}
		key={index} index={index}
		selected={index == currentSelectedIndex}
		onClick={ev => currentSetSelectedIndex(index)} />
}

function AnArm(props) {
	let {theArm, style} = props;

	theArm.populate();
	//console.info(`theArm.list: `, theArm.list);

	let heightWeWant = document.body.parentElement.clientHeight - 80;
	if (typeof visualViewport != 'undefined')
		heightWeWant = visualViewport.height - 80;

	return (<div id='arm' className='AnArm viewingPanel' key='arm' style={style}>
		<BackButton title='Chromosome' level='arm' />
		<h3>Arm {theArm.side} {theArm.title} ({theArm.name})</h3>
		<List
			itemCount={theArm.list.length}
			itemData={theArm}
			itemSize={20}
			width={250}
			height={heightWeWant}
			className='armList longList'
		>
			{Row}
		</List>
	</div>);
}

AnArm.propTypes = {
	theArm: PropTypes.instanceOf(arm).isRequired,
	style: PropTypes.object.isRequired,
};

export default AnArm;


