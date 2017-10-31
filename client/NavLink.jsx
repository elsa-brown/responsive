import React from 'react';
import logo from '../public/assets/Wethos_TextWhite.png';
// import logo from '../public/assets/logo-cropped.png';

const NavLink = (props) => {
	return (
		<div>
		{props.linkName !== '' ? 
			(<div className="nav-link">{ props.linkName }</div>) :
			(<div className="nav-logo"><img src={logo}/></div>)
		}
		</div>
	)
}

export default NavLink;