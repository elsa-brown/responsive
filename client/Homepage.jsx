import React from 'react';

import NavBar from './NavBar';
import Hero from './Hero';
import SubNav from './SubNav';
import BlockFirst from './BlockFirst';
import BlockSecond from './BlockSecond';
import BlockThird from './BlockThird';
import BlockFourth from './BlockFourth';
import BlockFifth from './BlockFifth';
import Footer from './Footer';

import './styles/style.scss';

const Homepage = () => {
	return (
		<div className="wrapper">
			<NavBar />
			<Hero />
			<SubNav />
			<BlockFirst />
			<BlockSecond />
			<BlockThird />
			<BlockFourth />
			<BlockFifth />
			<Footer />
		</div>
	)
};

export default Homepage;
