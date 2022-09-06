/*
** AChromo -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/

import React from 'react';
import PropTypes from 'prop-types';

import ArmInChromo from './ArmInChromo.js';
import BackButton from '../BackButton.js';

import chromo from './chromo.js';

//import {codonToAmino} from '../dnaData.js';

import armsInChromoImage from './armsInChromo2.png';


function AChromo(props) {
	let {theChromo, style} = props;

	theChromo.populate();
	//console.info(`theChromo.list: `, theChromo.list);
	let arms = theChromo.list.map(theArm =>
		<ArmInChromo theArm={theArm} theChromo={theChromo} key={theArm.name} />);

	return (<>
		<div id='chromo' className='AChromo viewingPanel' key='chromo' style={style}>
			<BackButton title='Genome' level='chromo' />
			<h3>Chromosome {theChromo.name}</h3>
			<div className='chromoImage'
					onMouseMove={ev => ev.preventDefault()}>
				<img src={armsInChromoImage}  alt='parts of a chromosome'/>
				<div className='armContainer' >
					{arms}
				</div>
			</div>
		</div>
	</>);
}

AChromo.propTypes = {
	theChromo: PropTypes.instanceOf(chromo).isRequired,
	style: PropTypes.object.isRequired,
};

export default AChromo;
