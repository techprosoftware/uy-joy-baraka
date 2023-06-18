/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Register.scss'
import { useForm } from 'react-hook-form';

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <>
    <div className="register__inner ">
        <div className="container">
            <div className="register__wrapper">
                <h3>Ro’yxatdan o’tish</h3>
                <p>Saytimizdan foydalanish uchun iltimos oldin ro’yxatdan o’ting</p>

                <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Ismingiz" {...register("First name", {required: true, maxLength: 80})} />
                <input type="tel" placeholder="Telefon raqamingiz" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

                <button type="submit">Ro'yxahtdan o'tish</button>
                
                <a href="/login">Ro’yxatdan o’tganmisiz?</a>
                </form>
  
            </div>
        </div>
    </div>
    </>
  )
}
