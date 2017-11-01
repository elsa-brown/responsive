import React from 'react';
import { Link } from 'react-router';

const links = ['Overview', 'Design', 'Development', 'Planning', 'Production']

const MobileSubNav = () => {
	return (
		<nav>
			<ul className="subnav subnav-mobile">
			{links.map((link, i) => (
				<li key={i}><Link to="#"><i className="fa fa-circle-o" aria-hidden="true"></i></Link></li>
				)
			)}
			</ul>
		</nav>
	)
};

export default MobileSubNav;
