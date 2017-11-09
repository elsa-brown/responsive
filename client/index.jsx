import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Homepage from './components/Homepage';

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={ Homepage } />
	</Router>,
	document.getElementById('app')
);
