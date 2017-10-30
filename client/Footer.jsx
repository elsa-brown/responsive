import React from 'react';
import { Link } from 'react-router';

const links = ['How It Works', 'Browse Projects', '', 'I\'m A Freelancer', 'Log In/Sign Up']

const Footer = () => {
	return (
		<ul>
		{links.map((link, i) => (
			<li key={i}><Link to="#">{link}</Link></li>
			)
		)}
		</ul>
	)
};

export default Footer;
