import React from 'react';

import MobileNav from './MobileNav';
import NavBar from './NavBar';
import Hero from './Hero';
import SubNav from './SubNav';
import MobileSubNav from './MobileSubNav';
import BlockFirst from './BlockFirst';
import BlockSecond from './BlockSecond';
//import BlockThird from './BlockThird';
//import BlockFourth from './BlockFourth';
//import BlockFifth from './BlockFifth';
import Footer from './Footer';

import '../styles/style.scss';

const Homepage = () => {
	return (
		<div className="wrapper">
			<MobileNav />
			<NavBar />
			<Hero />
			<MobileSubNav />
			<SubNav />
			<BlockFirst />
			<BlockSecond />
			<Footer />
		</div>
	)
};

export default Homepage;
