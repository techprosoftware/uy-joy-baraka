/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./Register.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AuthService from "../../Api/auth.service";


export const Register = () => {
  const name = useRef();
  const phone = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const users = async (value) => {
    const data = await AuthService.userRegister(value)

    if(data.status === 201) {
      console.log(data);
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = {
      name: name.current.value,
      phone: phone.current.value,
      password: password.current.value
    }

    users(value)

    var phoneNumber = phone.current.value;

    function formatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/\D/g, "");

      var formattedNumber = phoneNumber.replace(
        /(\d{5})(\d{3})(\d{2})(\d{2})/,
        "+$1...$3 $4"
      );

      return formattedNumber;
    }

    var formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    window.localStorage.setItem("phone", formattedPhoneNumber);
    // navigate("/sms");
  };

  return (
    <>
      <div className="register__inner ">
        <div className="container">
          <div className="register__wrapper">
            <h3>Ro’yxatdan o’tish</h3>
            <p className="mt-2">
              Saytimizdan foydalanish uchun iltimos oldin ro’yxatdan o’ting
            </p>

            <form className="register__form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Ismingiz" required ref={name} />
              <input
                type="password"
                placeholder="Parolingiz"
                required
                ref={password}
              />
              <input
                type="number"
                placeholder="Telefon raqamingiz"
                required
                ref={phone}
              />

              <button type="submit">Ro'yxatdan o'tish</button>

              <Link to="/login">Ro’yxatdan o’tganmisiz?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
