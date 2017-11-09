import React from 'react';
import { Link } from 'react-router';

import Panel from './Panel';

const BlockSecond = () => {
	return (
		<div className="block-second">
			<h3>Content Is Like Water</h3>
			<div className="panel-container">
				<Panel />
				<Panel />
				<Panel />
			</div>
		</div>
)};

export default BlockSecond;

