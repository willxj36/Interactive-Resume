import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Overview from './pages/Overview';

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/overview' component={Overview} />
				<Route exact path='/education' component={Education} />
				<Route exact path='/experience' component={Experience} />
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;