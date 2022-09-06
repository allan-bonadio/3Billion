/*
** codon -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/

import dnaObject from '../dnaObject.js';
import {codonToAmino} from '../dnaData.js';


class codon extends dnaObject {
	constructor(name) {
		super(name, null);
		this.amino = codonToAmino[name];
	}
}

export default codon;
