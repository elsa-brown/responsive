import React, { Component } from 'react';

import MobileNav from './MobileNav';
import logo from '../../public/assets/Wethos_JustlogoPurple.png'


class MobileNavContainer extends Component {
	constructor() {
		super()
		this.state = {
			menuIsVisibile: false
		}

		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu() {
		let bool = !this.state.menuIsVisibile
		this.setState({menuIsVisibile: bool})
		console.log(this.state)
	}

	render() {
		return (
			<div className="mobile-nav">
				<div className="logobox">
					<img src={logo} />
				</div>
				<div className="menubox">
					<i className="fa fa-bars fa-3x" onClick={this.toggleMenu}></i>
				</div>
				{ this.state.menuIsVisibile ? <MobileNav /> : null }
			</div>
		)
	}
}

export default MobileNavContainer;
