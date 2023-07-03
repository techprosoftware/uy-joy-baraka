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
<<<<<<< HEAD
import { NotFoundError } from './pages/404/404';
=======
import { Messaging } from './pages/Messaging/Messaging'
>>>>>>> 3275e23feb884e78e787928942460ddfbb9ceee3


function App() {
	return (
<<<<<<< HEAD
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
=======
    <>
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sms" element={<SmsPage />} />
        <Route path="/card" element={<CardSingle />} />
        <Route path="/messaging" element={<Messaging />} />
      </Routes>

      {/* <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sms" element={<SmsPage />} />
        <Route path="/card" element={<CardSingle />} />
        <Route path="/messaging" element={<Messaging />}>
          <Route path="sell" element={<SellMessaging />} />
          <Route path="buy" element={<BuyMessaging />} />
        </Route>
      </Routes> */}
    </>
  );
>>>>>>> 3275e23feb884e78e787928942460ddfbb9ceee3
}

export default App;
