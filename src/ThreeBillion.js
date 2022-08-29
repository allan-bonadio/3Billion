/*
** 3Billion -- root component of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

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

/* ************************************** set up the data */

let rootFormula, rootGenome,  someChromo, someArm, someGene



const patients = [
	{name: 'Alan Shepard', gender: 'xy'},
	{name: 'Alexander Gerst', gender: 'xy'},
	{name: 'Alexei Leonov ', gender: 'xy'},
	{name: 'Buzz Aldrin', gender: 'xy'},
	{name: 'Christa McAuliffe', gender: 'xx'},
	{name: 'Frank Borman', gender: 'xy'},
	{name: 'Haisheng Nie', gender: 'xy'},
	{name: 'Jeanette J. Epps', gender: 'xx'},
	{name: 'Jessica Ulrika "Goose" Meir', gender: 'xx'},
	{name: 'John Glenn', gender: 'xy'},
	{name: 'John Young', gender: 'xy'},
	{name: 'Judith Resnik', gender: 'xx'},
	{name: 'Koichi Wakata', gender: 'xy'},
	{name: 'Michael Collins ', gender: 'xy'},
	{name: 'Neil Armstrong', gender: 'xy', selected: true},
	{name: 'Sally Ride', gender: 'xx'},
	{name: 'Svetlana Savitskaya', gender: 'xx'},
	{name: 'Thomas Gautier Pesquet', gender: 'xy'},
	{name: 'Valentina Tereshkova', gender: 'xx'},
	{name: 'Yelena Vladimirovna Kondakova', gender: 'xx'},
	{name: 'Yuri Gagarin', gender: 'xy'},
];


// this is just temporary for testing
function setUpData(patient) {
	rootFormula = formulate(patient.name);

	rootGenome = new genome(patient.name, rootFormula, patient.gender);
	rootGenome.populate();

	someChromo = new chromo(6, rootFormula);
	someChromo.populate();

	someArm = new arm('ptel_R', rootFormula, 6);
	someArm.populate();

	someGene = new gene('SYTO-k', rootFormula);
	someGene.populate();
}

setUpData(patients[14]);
//setUpData('Neil Armstrong', 'xy');


/* ************************************** show it all */
function ThreeBillion() {
	let [patientIndex, setPatientIndex] = useState(14);

	function setNewPatient(ev) {
		patientIndex = ev.target.value;
		setPatientIndex(patientIndex);
		setUpData(patients[patientIndex]);
	}

	let thePatient = patients[patientIndex];

	let patientOptions = patients.map((pat, ix) =>
		<option value={ix} key={ix}>
			{pat.name} {pat.gender} {patientIndex == ix ? 'selected' : ''}
		</option>
	);

	return (<>
		<header>
			<h2>
				<img src='chromosome.png' alt='logo' />
				3 Billion And Me
			</h2>
			<p>
				A demo chromosome browser
			</p>
			{thePatient.name} {thePatient.gendergender}
			<select value={patientIndex} onChange={setNewPatient} >
				{patientOptions}
			</select>

			<br clear='left' />
		</header>

		{/* try all the screens - just for testing */}
		<main className="ThreeBillion">
			<hr />
			<AGenome theGenome={rootGenome} formula={rootFormula} />
			<hr />
			<AChromo theChromo={someChromo} formula={rootFormula} />
			<hr />
			<AnArm theArm={someArm} formula={rootFormula} />
			<hr />
			<AGene theGene={someGene} formula={rootFormula} />
			<hr />

		</main>
	</>);
}

export default ThreeBillion;
