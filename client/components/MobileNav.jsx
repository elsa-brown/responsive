import React from 'react';

import MobileDropdownNav from './MobileDropdownNav';
const links = ['Link', 'Link', 'Link', 'Link']

const MobileNav = () => {
	return (
		<ul className="mobile-dropdown">
		{links.map((link, i) => (
			<li key={i}>
					<MobileDropdownNav className="nav-link" linkName={ link } />
			</li>
			)
		)}
		</ul>
	)
};

export default MobileNav;
