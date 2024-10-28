import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { Home, Resume, Portfolio, AboutMe } from "./pages";

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/resume/*' element={<Resume />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/aboutme' element={<AboutMe />} />
			</Routes>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;