import React from 'react';
import { Link } from 'react-router';

const BlockFirst = () => {
	return (
		<div className="block-narrow block-first">
			<div className="block-first-left col-mobile-12 col-sm-6">
				<div className="block-first-left-text col-lg-10">
					<h3>We Match Freelancers</h3> 
					<h3>With Cause + Skills</h3>
					<h6>These aren't just your average graphic designers, these are people who's heart and soul aligns with making the world a better place. We match you based on cause and skills, so you can find the passionate professionals you need to keep making a difference.
					</h6>
				</div>
			</div>
			<div className="block-first-right col-mobile-12 col-sm-6">
				<table>
					<tr>
						<Link to="#" className="design">
							<td>Design</td>
						</Link>
						<Link to="#" className="development">
							<td >Development</td>
						</Link>
					</tr>
					<tr>
						<Link to="#" className="planning">
							<td>Planning</td>
						</Link>
						<Link to="#" className="production">
							<td>Production</td>
						</Link>
					</tr>
				</table>
			</div>
		</div>
)};

export default BlockFirst;
