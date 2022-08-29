/*
** dnaObject -- superclass of genome, arm, chromo, gene and codon
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

class dnaObject {
	constructor(name, formula) {
		this.name = name;
		this.formula = formula;
	}

	// populate runs when we need to know the items at this level
	populate() {
		throw new Error(`generic abstract superclass!`);
	}

	list = [];
}

export default dnaObject;
