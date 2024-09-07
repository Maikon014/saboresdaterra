import React from 'react';

import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Blogs from "./components/Blogs/Blogs";
import Hero from './components/Hero.jsx';
import FAQ from './components/FAQ/FAQ.jsx';

const MainRoutes = () => {
	return (

		<Routes>
			<Route path="/" element={<Hero />} />
			<Route path="/fqa" element={<FAQ />} />
			<Route path="/blogs" element={<Blogs />} />
		</Routes>
	);
};

export default MainRoutes;
