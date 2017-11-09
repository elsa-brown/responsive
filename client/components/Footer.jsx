import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
	return (
		<div className="footer">
			<ul className="col-md-3">
				<li className="footer-title">Header</li>
				<Link to="#"><li>Menu Item</li></Link>
				<Link to="#"><li>Menu Item</li></Link>
				<Link to="#"><li>Menu Item</li></Link>
			</ul>
			<ul className="col-md-3">
				<li className="footer-title">Header</li>
				<Link to="#"><li>Menu Item</li></Link>
				<Link to="#"><li>Menu Item</li></Link>
			</ul>
			<ul className="col-md-3">
				<li className="footer-title">Header</li>
				<Link to="#"><li>Menu Item</li></Link>
				<Link to="#"><li>Menu Item</li></Link>
				<Link to="#"><li>Menu Item</li></Link>
			</ul>
			<ul className="col-md-3">
					<li className="footer-title">Header</li>
					<Link to="#"><li>Menu Item</li></Link>
					<Link to="#"><li>Menu Item</li></Link>
			</ul>
			<div className="col-md-3 social">
				<p>Social Media</p>
				<div className="social-icons">
					<Link to="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
					<Link to="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
					<Link to="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
					<Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
				</div>
			</div>
		</div>
	)
};

export default Footer;
