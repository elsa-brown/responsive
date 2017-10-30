import React from 'react';

import NavBar from './NavBar';
import Hero from './Hero';
import SubNav from './SubNav';
import Block from './Block';
import Footer from './Footer';

import './style.scss';

const Homepage = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<SubNav />
			<Block />
			<Footer />
		</div>
	)
};

export default Homepage;
