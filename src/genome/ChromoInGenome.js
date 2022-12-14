/*
** ChromoInGenome -- part of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable eqeqeq */

import PropTypes from 'prop-types';

import genome from '../genome/genome.js';
import chromo from '../chromo/chromo.js';

import ThreeBillion from '../ThreeBillion.js';


function ChromoInGenome(props) {
	const {theChromo} = props;
	const name = theChromo.name;
	let icon = <img className='chromoIcon'
				src={`chromos/ch${name}.png`}
				alt={`chromosome ${name}`} />;

	// mouse up, but only if user didn't drag away
	const handleClick =
	ev =>  {
		console.info(`ChromoInGenome: clicked and going lower...`);
		ThreeBillion.navigateLower('chromo', theChromo);
		ev.preventDefault();
		ev.stopPropagation();
	}

	return (<>
		<div className={`ChromoInGenome clickable`} key={name}
				onClick={handleClick} >
			{icon}
			<div>{name}</div>
		</div>
	</>);
}

ChromoInGenome.propTypes = {
	theChromo: PropTypes.instanceOf(chromo).isRequired,
	theGenome: PropTypes.instanceOf(genome).isRequired,
};
export default ChromoInGenome;
