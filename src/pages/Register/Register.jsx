/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './Register.scss'

export const Register = () => {
   
    const name = useRef()
    const phone = useRef()

    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(phone.current.value);

            var phoneNumber = phone.current.value;
            function formatPhoneNumber(phoneNumber) {
                
                phoneNumber = phoneNumber.replace(/\D/g, '');
              
             
                var formattedNumber = phoneNumber.replace(/(\d{5})(\d{3})(\d{2})(\d{2})/, "+$1...$3 $4");
              
                return formattedNumber;
              }
              
              var formattedPhoneNumber = formatPhoneNumber(phoneNumber);
              console.log(formattedPhoneNumber);
              
              
    }

        
    
  return (
    <>
    <div className="register__inner ">
        <div className="container">
            <div className="register__wrapper">
                <h3>Ro’yxatdan o’tish</h3>
                <p>Saytimizdan foydalanish uchun iltimos oldin ro’yxatdan o’ting</p>

                <form className='register__form' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ismingiz" required  ref={name} />
                    <input type="tel" placeholder="Telefon raqamingiz" required ref={phone} />

                    <button type="submit">Ro'yxatdan o'tish</button>
                    
                    <a href="/login">Ro’yxatdan o’tganmisiz?</a>
                </form>
  
            </div>
        </div>
    </div>
    </>
  )
}
