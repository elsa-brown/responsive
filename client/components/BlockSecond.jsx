import React from 'react';

import Panel from './Panel';

const numbers = ['One', 'Two', 'Three'];

const BlockSecond = () => {
	return (
		<div className="block-second">
			<h3>Content Is Like Water</h3>
			<div className="panel-container">
			{ numbers.map((num, i) => {
					return <Panel key={i} title={num} />
				})
			}
			</div>
		</div>
)};

export default BlockSecond;

