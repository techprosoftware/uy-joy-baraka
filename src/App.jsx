/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Public } from './pages/Public/Public';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { SmsPage } from './pages/smsPage/SmsPage';
import { CardSingle } from './components/CardSingle/CardSingle'
import { NotFoundError } from './pages/404/404';


function App() {
	return (
		<>
	
			<Routes>
				<Route path='/' element={<Public />} />
				<Route path='/register' element={<Register/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/sms' element={<SmsPage/>}/>
				<Route path='/card' element={<CardSingle/>}/>

			</Routes>
		
			
		</>
	);
}

export default App;
