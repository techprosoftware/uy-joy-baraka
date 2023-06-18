/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './smsPage.scss'
import { useForm } from 'react-hook-form';

export const SmsPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


   
 
    

  return (
    <>
    <div className="register__inner ">
        <div className="container">
            <div className="register__wrapper">
                <h3>Kodni kiriting</h3>
                <p>Quyidagi telfon raqamga kod yuborildi </p>

                <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
                <input type="number" placeholder="Kodni Kiriting" {...register("Code", {required: true, minLength: 6, maxLength: 12})} />

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
