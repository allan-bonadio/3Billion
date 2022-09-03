/*
** 3Billion -- root component of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars, eqeqeq, no-restricted-globals,  no-sparse-arrays */

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
import Header, {getDefaultPatient} from './Header.js';



class ThreeBillion extends React.Component {
	constructor(props) {
		super(props);

		ThreeBillion.me = this;

		let thePatient = getDefaultPatient();
		this.state = {
			panelDescStack: [{level: 'genome', model: this.createRootGenome(thePatient)}],
			thePatient,
			isNarrowScreen: true,  // true if mobile.  event will set this
		};

	}

	// this is easier for other modules to access
	static isNarrowScreen;

	/* ************************************** patient */

	createRootGenome(thePatient) {
		let theGenome = new genome(thePatient.name, formulate(thePatient.name),
			thePatient.gender);
		theGenome.populate();
		return theGenome;
	}

	// user chooses new patient from menu
	setNewPatient =
	(thePatient) => {
		// set up the fake data
		this.setState({
			panelDescStack: [{level: 'genome', model: this.createRootGenome(thePatient)}],
			thePatient,
		});
	}


	/* ************************************** mobile */

	componentDidMount() {
		// is it mobile?  Listener fires upon startup and at every change
		// can't setState() unless mounted.
		this.narrowQueryList = window.matchMedia("(max-width: 500px)");

		// Fires when phone rotates or browser window changes width.
		// sets global & state isNarrowScreen at the same time
		this.narrowQueryList.addEventListener('change',
			ev => {
				let isNarrowScreen = ThreeBillion.isNarrowScreen = this.narrowQueryList.match;
				this.setState({isNarrowScreen});
			}
		);

	}

	/* ************************************** navigation */
	// tells us where we are.  For mobile, this is hte only level showing;
	// for desktop, all levels up to this one too.
	getCurrentPanelDesc =
		() => this.state.panelDescStack.at(-1);


	// pop off levels of the stack from the given level to the end
	// returns new stack; it's up to you to setState().
	// note we need to have a different object anyway so React notices the change
	static trimStack(level) {
		let newStack = [...ThreeBillion.me.state.panelDescStack];
		for (let i = 0; i < newStack.length; i++) {
			if (newStack[i].level == level) {
				newStack = newStack.slice(0, i);
				break;
			}
		}
		return newStack;
	}


	// user clicks on some element in some panel,
	// and this takes them there.  Two ways to call: with one panelDesc,
	// or with individual components
	static navigateIn(deeperPanelDesc, model) {
		if (typeof deeperPanelDesc == 'string')
			deeperPanelDesc = {level: deeperPanelDesc, model};

		// don't just keep on pushing stuff on the stack; get rid of the
		// stuff this replaces.  (the first time,  nothing.)
		let newStack = ThreeBillion.trimStack(deeperPanelDesc.level);

		newStack.push(deeperPanelDesc);
		console.info(`navigateIn(${JSON.stringify(deeperPanelDesc)}) panelDescStack=`,
			[...newStack]);
		ThreeBillion.me.setState({panelDescStack: newStack});
		ThreeBillion.me.scrollToBottom = true;
	}

	// user ... clicks on '< genome' or whatever button
	// the level tells which panel we're at; that level is getting deleted.
	static navigateOut(level) {
		let newStack = ThreeBillion.trimStack(level);

		console.info(`navigateOut(${level}) panelDescStack=`,
			[...newStack]);
		ThreeBillion.me.setState({panelDescStack: newStack});
		ThreeBillion.me.scrollToBottom = true;
	}

	/* ************************************** rendering */

	componentDidUpdate() {
		if (this.scrollToBottom) {
			window.scrollTo({top: 999999, left: 0, behavior: 'smooth'} );
			this.scrollToBottom = false;
		}
	}

	// make the panel given panel description
	// style is a react-like style object to be applied to the outside el of the panel
	panelFactory(panelDesc, thePatient, style) {
		switch (panelDesc.level) {
			case 'genome':
				return <div  className='viewingPanel' key='genome' style={style} >
					<Header thePatient={thePatient}
						setNewPatient={this.setNewPatient} key='header'/>
					<hr key='hr-header'/>
					<AGenome theGenome={panelDesc.model} key='AGenome' />
				</div>;

			case 'chromo':
				return <AChromo theChromo={panelDesc.model} key='chromo' style={style} />;

			case 'arm':
				return <AnArm theArm={panelDesc.model} key='arm' style={style} />;

			case 'gene':
				return <AGene theGene={panelDesc.model} key='gene' style={style} />;

			default: throw new Error(`bad panelDesc.level: ${panelDesc.level}`);
		}
	}

	render() {
		let viewingPanels;

		viewingPanels = this.state.panelDescStack.map((panelDef, ix) => {
			return [
				<hr key={`hr-${ix}`}/>,
				this.panelFactory(panelDef, this.state.thePatient, {})
			];
		});

		return (<>

			<main className="ThreeBillion" id='Main' >
				{viewingPanels}
			</main>
		</>);
	}
}

export default ThreeBillion;
