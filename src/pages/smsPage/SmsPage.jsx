/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './smsPage.scss'

export const SmsPage = () => {
    const phone = window.localStorage.getItem('phone') 


  return (
    <>
    <div className="register__inner ">
        <div className="container">
            <div className="register__wrapper">
                <h3>Kodni kiriting</h3>
                <p className='mt-2'>Quyidagi telefon raqamga kod yuborildi {phone ? phone : ''}</p>

                <form className='register__form' >
                <input type="number" placeholder="Kodni Kiriting" />

                <button type="submit">Yuborish</button>
                
               <div> 
                <a href="/register">Telefon raqamni almashtirish?</a> 
                 <a href="/login">Ro’yxatdan o’tganmisiz?</a></div>
                </form>
  
            </div>
        </div>
    </div>
    </>
  )
}
