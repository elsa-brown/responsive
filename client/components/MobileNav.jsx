import React, { Component } from 'react';
import { Link } from 'react-router';

//import NavBar from './NavBar';
import logo from '../../public/assets/Wethos_JustlogoPurple.png'
// const links = ['How It Works', 'Browse Projects', '', 'I\'m A Freelancer', 'Log In/Sign Up']

class MobileNav extends Component {
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
				{ this.state.menuIsVisibile ? <div>Menu Items</div> : null }
			</div>
		)
	}
}

export default MobileNav;
