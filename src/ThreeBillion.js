/*
** 3Billion -- root component of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable eqeqeq, no-restricted-globals,  no-sparse-arrays */

import React from 'react';

import './ThreeBillion.scss';
import AGenome from './genome/AGenome.js';
import AChromo from './chromo/AChromo.js';
import AnArm from './arm/AnArm.js';
import AGene from './gene/AGene.js';

import genome from './genome/genome.js';

import formulate from './formulate.js';
import Header, {getDefaultPatient} from './Header.js';



class ThreeBillion extends React.Component {
	constructor(props) {
		super(props);

		ThreeBillion.me = this;
		window.ThreeBiillion = this;

		let thePatient = getDefaultPatient();
		this.state = {
			panelDescStack: [{level: 'genome', model: this.createRootGenome(thePatient)}],
			thePatient,
			isNarrowScreen: true,  // true if mobile. an event will set this
			renderMe: 0,
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

	setScreenInfo =
	ev => {
		let isNarrowScreen = ThreeBillion.isNarrowScreen = this.narrowQueryList.matches;
		let viewportWidth = ThreeBillion.viewportWidth = document.body.offsetWidth;
		this.setState({isNarrowScreen, viewportWidth});
		console.info(`body width=${viewportWidth }   isNarrowScreen= `, isNarrowScreen);
	}

	componentDidMount() {
		this.narrowQueryList = window.matchMedia("(max-width: 500px)");

		// Fires when phone rotates or browser window changes width.
		// sets global & state isNarrowScreen at the same time
		if (this.narrowQueryList.addEventListener)
			this.narrowQueryList.addEventListener('change', this.setScreenInfo);
		else
			this.narrowQueryList.onchange = this.setScreenInfo;

		this.setScreenInfo();

		document.addEventListener('scroll', this.scrollHandler);
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
	static navigateLower(deeperPanelDesc, model) {
		if (typeof deeperPanelDesc == 'string')
			deeperPanelDesc = {level: deeperPanelDesc, model};

		// don't just keep on pushing stuff on the stack; get rid of the
		// stuff this replaces.  (the first time,  nothing.)
		let newStack = ThreeBillion.trimStack(deeperPanelDesc.level);

		newStack.push(deeperPanelDesc);
		console.info(`navigateLower(${JSON.stringify(deeperPanelDesc)}) panelDescStack=`, [...newStack], new Date());
		ThreeBillion.me.setState({panelDescStack: newStack});
		//setTimeout(() => {window.scrollTo(2000, 0);}, 2000)
		setTimeout(() => {location.hash = '#'+ deeperPanelDesc.level;}, 500)
		//location.hash = '#chromo';
		ThreeBillion.me.scrollToEnd = true;
	}

	// user ... clicks on '< genome' or whatever button
	// the level tells which panel we're at; that level is getting deleted.
	static navigateHigher(level) {
		// in this case, we want to scroll BEFORE changing the stack.
		if (ThreeBillion.isNarrowScreen)
			window.scrollTo({left: 999999, top: 0, behavior: 'smooth'} );
		else
			window.scrollTo({top: 999999, left: 0, behavior: 'smooth'} );

		let newStack = ThreeBillion.trimStack(level);
		//console.info(`navigateHigher(${level}) panelDescStack=`,
		//	[...newStack]);
		ThreeBillion.me.setState({panelDescStack: newStack});
	}

	/* ************************************** scrolling */

	scrollTimeout;

	// if the scroll is near a panel boundary, slide it to being exactly there.
	// doesn't always work, like Chrome's mobile emulator.
	// called continuously while user is scrolling
	scrollHandler =
	ev => {
		// now wait for the user to stop...
		if (this.scrollTimeout)
			clearTimeout(this.scrollTimeout);

		this.scrollTimeout = setTimeout(() => {
			// the only way to get here is if the user stops scrolling for a bit
			console.info(`scroll slowed... x=${window.scrollX} y=${window.scrollY}`);

			if (ThreeBillion.isNarrowScreen) {
				// snap to a scroll point, if it's near one
				let screensScrolled = window.scrollX / ThreeBillion.viewportWidth;
				let frac = screensScrolled % 1;
				console.info(`now rounding scroll frac=${frac}, screensScrolled=${screensScrolled} `);

				if (frac > .8 || frac < .2) {
					let scrollMeTo = Math.round(screensScrolled) * ThreeBillion.viewportWidth;
					console.info(` to ${scrollMeTo} ${window.scrollY}`)
					window.scrollTo({left: scrollMeTo, top: window.scrollY, behavior: 'smooth'} );
				}
			}

			this.scrollTimeout = undefined;
		}, 200);

	}

	/* ************************************** rendering */

	componentDidUpdate() {
		if (this.scrollToEnd) {
			setTimeout(() => {
				console.info(`scrollToEnd`);
				if (ThreeBillion.isNarrowScreen) {
					window.scrollTo({left: 2000, top: 0, behavior: 'smooth'} );
				}
				else
					window.scrollTo({top: 2000, left: 0, behavior: 'smooth'} );
				console.info(`scrollToEnd: scrollX=${window.scrollX}  scrollY=${window.scrollY}`);

			}, 200);
			this.scrollToEnd = false;
		}
	}

	// make the panel given panel description
	// style is a react-like style object to be applied to the outside el of the panel
	panelFactory(panelDesc, thePatient, style) {
		switch (panelDesc.level) {
			case 'genome':
				return <div  id='genome' className='viewingPanel' key='genome' style={style} >
					<Header thePatient={thePatient}
						setNewPatient={this.setNewPatient} key='header'/>
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
				this.panelFactory(panelDef, this.state.thePatient, {})
			];
		});
		console.info(`rendering ${this.state.panelDescStack.length} panels`, new Date());
		return (<>

			<main className="ThreeBillion" id='Main' >
				{viewingPanels}
			</main>
		</>);
	}
}


export default ThreeBillion;
