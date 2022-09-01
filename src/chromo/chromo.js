/*
** chromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import dnaObject from '../dnaObject.js';
import genome from '../genome/genome.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import formulate from '../formulate.js';
import {codonToAmino} from '../dnaData.js';

// 'chromosome' is just too long a name so I standardized on Chromo.



class chromo extends dnaObject {
	// the name is either 1-22 or xx or xy
	constructor(name, formula) {
		super(`${name}`, formula);
	}

	// populate runs when we need to know the items at this level
	populate() {
		if (this.list.length)
			return; // already populated

		const formula = this.formula;

		// always the same sequence
		this.list = [
			// arguments to arm() are armName, formula, chromoName
			new arm('pter_L', 'left', 'short arm telomere', formula.newFormula(), this.name),
			new arm('p_L', 'left', 'short arm', formula.newFormula(), this.name),
			new arm('cen_L', 'left', 'centromere', formula.newFormula(), this.name),
			new arm('q_L', 'left', 'long arm', formula.newFormula(), this.name),
			new arm('qter_L', 'left', 'long arm telomere', formula.newFormula(), this.name),

			new arm('pter_R', 'right', 'short arm telomere', formula.newFormula(), this.name),
			new arm('p_R', 'right', 'short arm', formula.newFormula(), this.name),
			new arm('cen_R', 'right', 'centromere', formula.newFormula(), this.name),
			new arm('q_R', 'right', 'long arm', formula.newFormula(), this.name),
			new arm('qter_R', 'right', 'long arm telomere', formula.newFormula(), this.name),
		];

	}
}

/* for your convenience:
pter_L
p_L
cen_L
q_L
qter_L

pter_R
p_R
cen_R
q_R
qter_R

pter
p
cen
q
qter


*/

export default chromo;
