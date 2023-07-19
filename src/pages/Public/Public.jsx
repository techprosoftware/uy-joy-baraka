/* eslint-disable no-unused-vars */
import React from 'react'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import './Public.scss'
import { Upload } from '../Upload/Upload';
import { NotFoundError } from '../404/404';
import { Announ } from '../Announ/Announ';
import { AnnounSingle } from '../AnnounSingle/AnnounSingle';
import { CardSingle } from '../../components/CardSingle/CardSingle';
import { Messaging } from '../Messaging/Messaging';
import { AboutUs } from '../AboutUs/AboutUs';
import { UserInfo } from '../User-info/UserInfo';
export const Public = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/announ/*' element={<Announ/>} />
				<Route path='*' element={<NotFoundError/>} />
        <Route path='/announ-search' element={<AnnounSingle/>} />
        <Route path="/announcement/:id" element={<CardSingle />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/userinfo" element={<UserInfo />} />

    </Routes>
    <Footer />
    
</>
  )
}
