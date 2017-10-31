import React from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';
const links = ['How It Works', 'Browse Projects', '', 'I\'m A Freelancer', 'Log In/Sign Up']

const NavBar = () => {
	return (
		<ul className="navbar">
		{links.map((link, i) => (
			<li key={i} className="nav-item col-md-3">
				<Link to="#">
					<NavLink className="nav-link" linkName={ link } />
				</Link>
			</li>
			)
		)}
		</ul>
	)
};

export default NavBar;
