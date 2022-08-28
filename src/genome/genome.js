/*
** genome -- data structure that repsrensets a human's whole genome
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import formulate from '../formulate.js';

class genome {
	constructor(name, formula) {
		this.name = `${name}`;
		this.gender = formula.chance(.5) ? 'xx' : 'xy';
		this.formula = formula;
	}

	// not a lot of variety here, everybody's got the same mostly
	populate() {
		if (this.list)
			return;  // already done

		const formula = this.formula;
		const list = this.list = [];

		// first the numbered chromosomes
		for (let i = 1; i < 22; i++)
			list.push(new chromo(i, this.formula.formulate()));

		// then the xx or xy pair
		list.push(new chromo(this.gender, this.formula.formulate());
	}

}

export default genome;
