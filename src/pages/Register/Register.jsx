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
  const password2 = useRef();
  const navigate = useNavigate();

  const users = async (value) => {
    const data = await AuthService.userRegister(value);
    console.log(data);
  };

  const sendCode = async (value) => {
    const phone = value.phone;

    const userPhone = await AuthService.SendCode(phone);
    // navigate("/sms");
    console.log(userPhone.data.code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = {
      name: name.current.value,
      phone: phone.current.value,
      password: password.current.value,
    };

    if (password.current.value == password2.current.value) {
      users(value);
      sendCode(value);
      console.log("send");
    } else {
      console.log("error password");
    }

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
              <input type="text" placeholder="Ism" required ref={name} />

              <input
                type="number"
                placeholder="Telefon raqam"
                required
                ref={phone}
              />
              <input
                type="password"
                placeholder="Parol"
                required
                ref={password}
              />
              <input
                type="password"
                placeholder="Parolni takrorlang"
                required
                ref={password2}
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
