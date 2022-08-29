/*
** genome -- data structure that repsrensets a human's whole genome
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import dnaObject from '../dnaObject.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import formulate from '../formulate.js';
import {codonToAmino} from '../dnaData.js';

class genome extends dnaObject {
	constructor(name, formula, gender) {
		super(name, formula);
		this.gender = gender;
	}

	// populate runs when we need to know the items at this level
	// not a lot of variety here, everybody's got the same mostly
	populate() {
		if (this.list.length)
			return; // already populated


		const formula = this.formula;
		const list = this.list = new Array(23);

		// first the numbered chromosomes
		for (let i = 1; i < 22; i++)
			list[i] = new chromo(i, formula.newFormula());

		// then the xx or xy pair
		list[22] = new chromo(this.gender, formula.newFormula());
	}

}

export default genome;
