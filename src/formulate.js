/*
** formulate -- a seeded random number generator for consistent arbitrary data
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import seed from 'seed-random';


/*

A formula is a function that generates predictable psudorandom numbers.
It is based on a seed number.  Frequently this comes from another formula.
As such, you can genrate a tree of arbitrary repeatable numbers this way.

how to use:
In the beginning, someone has to make the root formula.  Call formulate() with either a real random number,
or a fixed one you want ot recreate.
	const motherFormula = formulate(Date.now());
	const motherFormula = formulate(savedSeed);
	const motherFormula = formulate(Math.random());

Then, traverse the top level of your data tree, and assign a formula to each node.
	for (your nodes)
		node = new NodeOfSomeKind(motherFormula.formula());
	...
	constructor(formula) {
		this.formula = formula;
	}

Each node can now proceed to make arbitrary but repeatable decisions, with its formula.
	const randomPlanet = ['mercury', 'venus', 'mars', 'jupiter'][this.formula.int(4)]

If you need a subnode with its own unique sequence of arbitrary but repeatable numbers, hand it a forked formula:
		node = new SubNodeOfSomeKind(this.formula.formulate());
or
	node.formula = parentFormula.formulate();


alternative words for these generators.  'generator' is already a concept in JS.
founder - found

father
originate
invent
devise
galvanize
pioneer
inspire
formulate
beget
establish

*/


// these all convert a generated random (real 0... 0.9999999)
// into something useful.  In all these functions, 'this' is the random generator as returned from formulate().
const converters = {
	// return a boolean that has a prob chance of being true.  prob is (real 0... 0.9999999)
	chance(prob) {
		return this() <= prob;
	},

	int(max) {
		return Math.floor(this() * max);
	},

	// generates an arbitrary 3-nucleotide sequence
	codon() {
		return 'ATGC'[this.int(4)] + 'ATGC'[this.int(4)] + 'ATGC'[this.int(4)];
	},

	// spawn off a new branch
	formulate() {
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

console.info("now for the formulate tests");
		const formula = formulate(42);
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
console.info("done with the formulate tests");


