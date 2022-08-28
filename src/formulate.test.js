/*
** formulate -- test the arbitrary number generator
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */


import formulate from './formulate.js';


describe('test the generator', () => {
	it('generates a function', () => {
		const formula = formulate(42);
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());
		console.info(formula.codon());

		expect(1 + 2).toBe(3);
	})
});
