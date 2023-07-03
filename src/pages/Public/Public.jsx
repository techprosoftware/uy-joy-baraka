/* eslint-disable no-unused-vars */
import React from 'react'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import './Public.scss'
import { Upload } from '../Upload/Upload';
import { NotFoundError } from '../404/404';
export const Public = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload/>}/>
				<Route path='*' element={<NotFoundError/>} />

    </Routes>
    <Footer />
    
</>
  )
}
