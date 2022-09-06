/*
** genome -- data structure that repsrensets a human's whole genome
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/

import dnaObject from '../dnaObject.js';
import chromo from '../chromo/chromo.js';

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
		for (let i = 1; i <= 22; i++)
			list[i] = new chromo(i, formula.newFormula());

		// then the xx or xy pair
		list.push(new chromo(this.gender, formula.newFormula()));
	}

}

export default genome;
