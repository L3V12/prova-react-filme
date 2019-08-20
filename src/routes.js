import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hearder from './components/Hearder';
import Search from './components/Search';
import Menu from './components/Menu';

const Routes = () => (
	<BrowserRouter>
	<Switch>
	  <Route exact path="/" component={Menu} />
	  <Route exact path="/Seila" component={Search} />
	</Switch>
	</BrowserRouter>

	);

export default Routes;