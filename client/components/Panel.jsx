import React from 'react';
import { Link } from 'react-router';

const Panel = (props) => {
	return (
		<div className="panel-outline col-md-4">
			<div className="panel">
				<h5>{props.title}</h5>
					<div className="panel-image-container">
						<div className="globe" />
					</div>
			</div>
		</div>
)};

export default Panel;
