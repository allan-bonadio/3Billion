/*
** arm -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/

import dnaObject from '../dnaObject.js';
import gene from '../gene/gene.js';

//import {codonToAmino} from '../dnaData.js';

class arm extends dnaObject {
	constructor(name, side, title, formula, chromoName) {
		super(name, formula);
		this.title = title;
		this.chromoName = chromoName;
	}

	// populate runs when we need to know the items at this level
	populate() {
		if (this.list.length)
			return; // already populated

		// list the genes in this arm.  Depends on both names.  Well, I guess,
		// mostly on the arm name, but the lengths depend on the chromo name.
		// punton that stuff for now
		let {formula} = this;

		// how many genes in this arm?  just guess for now
		let nGenes = 4000;

		let list = this.list = new Array(nGenes);
		for (let i = 0; i < nGenes; i++) {
			list[i] = new gene(this.formula.geneTitle(), formula.newFormula());
		}
	}

	list = [];
}

export default arm;
