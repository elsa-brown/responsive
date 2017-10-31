import React from 'react';
import { Link } from 'react-router';

import laptop from '../public/assets/laptop.png';

const BlockSecond = () => {
	return (
		<div className="block-second block-wide">
			<div className="block-second-top">
				<div className="block-second-top-text col-md-5">
					<h3>Free to Sign Up</h3> 
					<h3>Free To Post Projects</h3>
					<h6>We don't have any upfront or monthly fees, all you have to worry about is paying your freelancer. Speaking of which, how much do you even pay a freelancer anyway? Our unique pricing suggestion engine helps you set fair rates you can afford.</h6>
					<Link to="#" className="button button-dark">Browse Projects</Link>
				</div>
			</div>
			<div className="block-second-bottom">
				<div className="block-second-bottom-left col-md-6">
					<ol>
						<Link to="#"><li>Sign Up</li></Link>
						<h6>Create a profile that highlights your organization's mission.</h6>
						<Link to="#"><li>Post Projects in Minutes</li></Link>
						<h6>Create a project.</h6>
						<Link to="#"><li>Freelancers Apply to You</li></Link>
						<h6>We match based on your cause and the skills you need.</h6>

					</ol>
				</div>
				<div className="block-second-bottom-right col-md-6">
					<img src={laptop} />
				</div>
			</div>
		</div>
)};

export default BlockSecond;