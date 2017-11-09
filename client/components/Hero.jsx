import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
	return (
		<div className="hero">
			<div className="col-xxs-12 col-md-8">
				<h1>Responsive</h1>
				<h1>Page</h1>
				<h4>Responsive design is an approach to web design that makes pages render well on a variety of devices and window, or screen, sizes.</h4>
				<Link className="button button-light" to="#">Button</Link>
			</div>
		</div>
)};

export default Hero;
