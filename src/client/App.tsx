import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/resume' component={Resume} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/aboutme' component={AboutMe} />
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;