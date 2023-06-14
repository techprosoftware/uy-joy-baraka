/* eslint-disable no-unused-vars */
import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
