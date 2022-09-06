/*
** gene -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/

import dnaObject from '../dnaObject.js';
import codon from '../codon/codon.js';

class gene extends dnaObject {
// 	constructor(name, formula) {
// 		super(name, formula);
// 	}

	// populate runs when we need to know the items at this level
	populate() {
		if (this.list.length)
			return; // already populated

		// how many bases in this gene?  just guess for now
		let nCodons = 4000;

		let list = this.list = new Array(nCodons + 1);
		for (let i = 0; i < nCodons; i++) {
			list[i] = new codon(this.formula.codon());
		}
		list[nCodons] = new codon(this.formula.stopCodon());
	}
}

export default gene;
