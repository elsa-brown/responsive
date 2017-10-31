import React from 'react';
import { Link } from 'react-router';

// const links = ['How It Works', 'Browse Projects', '', 'I\'m A Freelancer', 'Log In/Sign Up']

const Footer = () => {
	return (
		<div className="footer">
			<ul className="col-md-3">
				<li className="footer-title">Please Help</li>
				<Link to="#"><li>FAQ Download</li></Link>
				<Link to="#"><li>Briefing Template</li></Link>
				<Link to="#"><li>Project Timeline Template</li></Link>
			</ul>
			<ul className="col-md-3">
				<li className="footer-title">Things Lawyers Love</li>
				<Link to="#"><li>Terms & Conditions</li></Link>
				<Link to="#"><li>Privacy Policy</li></Link>
			</ul>
			<ul className="col-md-3">
				<li className="footer-title">Who Are These People</li>
				<Link to="#"><li>Meet The Team</li></Link>
				<Link to="#"><li>Blog</li></Link>
			</ul>
			<ul className="col-md-3">
					<li className="footer-title">Can I Have Yo Number?</li>
					<Link to="#"><li>info@wethos.com</li></Link>
					<li>400 W. 20th St.</li>
					<li>New York, NY 10001</li>
					<li>315.345.1983</li>
			</ul>
			<div className="col-md-3 social">
				<p className="tiny">Whatever You Do. Don't Follow Us</p>
				<div className="social-icons">
					<i className="fa fa-facebook-official" aria-hidden="true"></i>
					<i className="fa fa-linkedin-square" aria-hidden="true"></i>
					<i className="fa fa-twitter-square" aria-hidden="true"></i>
					<i className="fa fa-instagram" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	)
};

export default Footer;
