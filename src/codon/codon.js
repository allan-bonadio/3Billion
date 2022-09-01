/*
** codon -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import dnaObject from '../dnaObject.js';
import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';

import formulate from '../formulate.js';
import {codonToAmino} from '../dnaData.js';


//console.info(`codonToAmino:`, codonToAmino);


class codon extends dnaObject {
	constructor(name) {
		super(name, null);
		this.amino = codonToAmino[name];
	}

	// probably not needed
	// populate() {
	// }

	//list = '';
}

export default codon;
