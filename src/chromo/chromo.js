/*
** chromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import arm from '../arm/arm.js';
import gene from '../gene/gene.js';
import codon from '../codon/codon.js';

import formulate from '../formulate.js';





class chromo {
	constructor(name formula) {
		this.name = name;
		this.formula = formula;
	}

	populate() {
		if (this.list)
			return;  // already done

		const formula = this.formula;

		// always the same sequence
		this.list = [
			new arm('pter_L', formula.formulate()),
			new arm('p_L', formula.formulate()),
			new arm('cen_L', formula.formulate()),
			new arm('q_L', formula.formulate()),
			new arm('qter_L', formula.formulate()),

			new arm('pter_L', formula.formulate()),
			new arm('p_L', formula.formulate()),
			new arm('cen_L', formula.formulate()),
			new arm('q_L', formula.formulate()),
			new arm('qter_L', formula.formulate()),
		];

	}
}

export default chromo;
