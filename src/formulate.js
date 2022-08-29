/*
** formulate -- a seeded random number generator for consistent arbitrary data
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import seed from 'seed-random';


/*

A formula is a function that generates predictable psudorandom numbers.
It is based on a seed number.  Frequently this comes from another formula.
As such, you can genrate a tree of arbitrary repeatable numbers this way.

how to use:
In the beginning, someone has to make the root formula.  Call formulate()
with either a real random number, or a fixed one you want ot recreate.
	const motherFormula = formulate(Date.now());
	const motherFormula = formulate(savedSeed);
	const motherFormula = formulate(Math.random());

As you construct your node, use the formula to make decisions.
Then, traverse the top level of your data tree, and assign a formula to each node.
	for (your nodes)
		node = new NodeOfSomeKind(motherFormula.formula());
	...
	constructor(formula) {
		this.formula = formula;
	}

Each node can now proceed to make arbitrary but repeatable decisions, with its formula.
	const randomPlanet = ['mercury', 'venus', 'mars', 'jupiter'][this.formula.int(4)]

If you need a subnode with its own unique sequence of arbitrary
but repeatable numbers, hand it a forked formula:
	node = new SubNodeOfSomeKind(this.formula.newFormula());
or
	node.formula = parentformula.newFormula();

*/


// these all convert a generated random (real 0... 0.9999999)
// into something useful.  In all these functions, 'this' is the random generator as returned from formulate().
const converters = {
	// return a boolean that has a prob chance of being true.  prob is (real 0... 0.9999999)
	chance(prob) {
		return this() <= prob;
	},

	// max is inclusive, so '8' can return 9 different answers.
	int(max) {
		return Math.floor(this() * (max + 1));
	},

	geneTitle() {
		// poor man's gaussian
		let length = 2 + this.int(4) + this.int(3);

		// start off with capital letters, ...
		let letters = true;
		let result = new Array(9);
		for (let i = 0; i < length; ) {
			if (letters)
				result[i++] = String.fromCharCode(65 + this.int(25));
			else
				result[i++] = String.fromCharCode(48 + this.int(9));
			//console.info(result);

			// then at some point, switch to digits... might switch again!
			if (this.chance(.3))
				letters = !letters;

			// sometimes there's a hyphen, but not on the ends
			if (i > 2 && i < length-2 && this.chance(0.2))
				result[i++] = '-';
			//console.info(result, letters);
		}

		return result.join('');
	},

	// generates an arbitrary 3-nucleotide sequence.  but NOT a Stop codon!
	codon() {
		let sequence = 'ATGC'[this.int(3)] + 'ATGC'[this.int(3)] + 'ATGC'[this.int(3)];
		if ('TAA' == sequence || 'TAG' == sequence || 'TGA' == sequence) {
			// oops, not a stop codon!  try again.
			return this.codon();
		}
		return sequence;
	},

	// generates an arbitrary Stop codon
	stopCodon() {
		 return ['TAA', 'TAG', 'TGA'][this.int(2)];
	},

	// spawn off a new branch
	newFormula() {
		return formulate(this());
	},
};

// always pass a startSeed, otherwise it'll really be random
function formulate(startSeed) {
	const formula = seed(startSeed);
	Object.assign(formula, converters);
	return formula;
}


export default formulate;

// console.info("now for the formulate tests");
// 		const formula = formulate(42);
// console.info("    chances");
// 		console.info(formula.chance(.2));
// 		console.info(formula.chance(.5));
// 		console.info(formula.chance(.9));
// console.info("    ints");
// 		console.info(formula.int(9));
// 		console.info(formula.int(9));
// 		console.info(formula.int(9));
// 		console.info(formula.int(9));
// 		console.info(formula.int(9));
// 		console.info(formula.int(9));
// 		console.info(formula.int(9));
// console.info("    codons");
// 		console.info(formula.codon());
// 		console.info(formula.codon());
// 		console.info(formula.codon());
// 		console.info(formula.codon());
// 		console.info(formula.codon());
// 		console.info(formula.codon());
//
// 		console.info(formula.stopCodon());
// 		console.info(formula.stopCodon());
// 		console.info(formula.stopCodon());
// console.info("    titles");
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// 		console.info(formula.geneTitle());
// console.info("done with the formulate tests");


