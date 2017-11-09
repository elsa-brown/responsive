import React from 'react';
import { Link } from 'react-router';

const BlockFirst = () => {
	return (
		<div className="block-first">
			<div className="block-first-left col-mobile-12 col-sm-6">
				<div className="block-first-left-text col-lg-10">
					<h3>History</h3>
					<h5>The first website to feature a responsive layout was Audi.com, launched in late 2001.</h5><h5>This layout adapted dynamically on Internet Explorer, but on Netscape Navigator, the page had to be reloaded in order to be resized.</h5>
				</div>
			</div>
			<div className="block-first-right col-mobile-12 col-sm-6">
				<table>
					<tbody>
						<tr>
							<td className="square-a">Topic</td>
							<td className="square-b">Topic</td>
						</tr>
						<tr>
							<td className="square-b">Topic</td>
							<td className="square-a">Topic</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
)};

export default BlockFirst;
