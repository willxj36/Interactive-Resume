import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Overview from './pages/Overview';

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/overview' component={Overview} />
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;