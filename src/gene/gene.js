/*
** gene -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';
import arm from '../arm/arm.js';
import codon from '../codon/codon.js';

import formulate from '../formulate.js';


class gene {
	constructor(name, formula) {
		this.name = name;
		this.formula = formula;
	}

	populate() {
	}

	list = [];
}

export default gene;
