import React from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';
const links = ['How It Works', 'Browse Projects', 'I\'m A Freelancer', 'Log In/Sign Up']

const MobileNav = () => {
	return (
		<ul className="mobile-nav">
		{links.map((link, i) => (
			<li key={i}>
				<Link to="#">
					<NavLink className="nav-link" linkName={ link } />
				</Link>
			</li>
			)
		)}
		</ul>
	)
};

export default MobileNav;
