import React from 'react';

import MobileNavContainer from './MobileNavContainer';
import NavBar from './NavBar';
import Hero from './Hero';
import BlockFirst from './BlockFirst';
import BlockSecond from './BlockSecond';
import Subfooter from './Subfooter';
import Footer from './Footer';

import '../styles/style.scss';

const Homepage = () => {
	return (
		<div className="wrapper">
			<MobileNavContainer />
			<NavBar />
			<Hero />
			<BlockFirst />
			<BlockSecond />
			<Subfooter />
			<Footer />
		</div>
	)
};

export default Homepage;
