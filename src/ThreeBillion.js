/*
** 3Billion -- root component of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import './ThreeBillion.scss';
import AGenome from './genome/AGenome.js';
import AChromo from './chromo/AChromo.js';
import AnArm from './arm/AnArm.js';
import AGene from './gene/AGene.js';

import genome from './genome/genome.js';
import chromo from './chromo/chromo.js';
import arm from './arm/arm.js';
import gene from './gene/gene.js';
import codon from './codon/codon.js';

import formulate from './formulate.js';

const rootFormula = formulate('Konstantin Efetov');
//const rootFormula = formulate(Date.now());

const rootGenome = new genome('Konstantin Efetov', rootFormula);
rootGenome.populate();

const someChromo = new chromo('Konstantin Efetov', rootFormula);
someChromo.populate();

const someArm = new arm('Konstantin Efetov', rootFormula);
someArm.populate();

const someGene = new gene('Konstantin Efetov', rootFormula);
someGene.populate();




function ThreeBillion() {
	return (<>
		<header>
			<h2>
				<img src='chromosome.png' alt="logo" />
				3 Billion And Me
			</h2>
			<p>
				A demo chromosome browser
			</p>
			<br clear='left' />
		</header>
		<main className="ThreeBillion">
			<hr />
			<AGenome genome={rootGenome} />
			<hr />
			<AChromo chromo={someChromo} formula={rootFormula} />
			<hr />
			<AnArm arm={someArm} formula={rootFormula} />
			<hr />
			<AGene gene={someGene} formula={rootFormula} />
			<hr />

		</main>
	</>);
}

export default ThreeBillion;
