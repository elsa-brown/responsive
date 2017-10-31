import React from 'react';
import { Link } from 'react-router';

const links = ['Overview', 'Design', 'Development', 'Planning', 'Production']

const SubNav = () => {
	return (
		<nav>
			<ul className="subnav">
			{links.map((link, i) => (
				<li key={i}><Link to="#">{link}</Link></li>
				)
			)}
			</ul>
		</nav>
	)
};

export default SubNav;