/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Login.scss'
import { useForm } from 'react-hook-form';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <>
    <div className="login__inner ">
        <div className="container">
            <div className="login__wrapper">
                <h3>Kirish</h3>
                <p>Saytimizga kirish uchun ismingiz va raqamingizni kiriting</p>

                <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <input type="tel" placeholder="Telefon raqamingiz" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
                <input type="text" placeholder="Parol" {...register("Parol", {required: true, maxLength: 80})} />

                <button type="submit">Kirish</button>
                
                <a href="/register">Ro’yxatdan o’tmaganmisiz?</a>
                </form>
  
            </div>
        </div>
    </div>
    </>
  )
}
