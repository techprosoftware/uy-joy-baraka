/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AuthService from "../../Api/auth.service";
import { useDispatch } from "react-redux";
import { setPhoneId } from "../../redux/phoneId/phoneIdAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const name = useRef();
  const phone = useRef();
  const password = useRef();
  const password2 = useRef();
  const navigate = useNavigate();

  const [code, setCode] = useState([]);

  const dispatch = useDispatch();

  const users = async (value) => {
    const data = await AuthService.userRegister(value);
    console.log(data);
    // console.log('das');
    if (data?.status === 201) {
      const userPhone = await AuthService.SendCode({
        phone: "998" + phone.current.value,
      });
      dispatch(setPhoneId(userPhone?.data?.codeValidationId));
      alert(userPhone?.data?.code);
      navigate("/sms");
    }
    else if (data?.response?.status === 401) {
      toast.warning("Bu raqam  ro'yxatdan o'tgan")
    }
    else if (data?.response?.status === 400) {
      toast.error("Nimadir xato, qayta urinib ko'ring")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = {
      name: name.current.value,
      phone: "998" + phone.current.value,
      password: password.current.value,
    };

    if (password.current.value == password2.current.value) {
      users(value);
      console.log("send");
    } else {
      toast.error("Takroriy parol xato");
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

            <form
              autoComplete="off"
              className="register__form"
              onSubmit={handleSubmit}
            >
              <label className="register__label" htmlFor="name">
                Ism
              </label>
              <input
                type="text"
                id="ism"
                className="register__inputs"
                placeholder="Ism"
                required
                ref={name}
              />

              <label className="register__label" htmlFor="number">
                Nomer
              </label>
              <div className="default__phone">
                <span>+998</span>
                <input
                  required
                  id="phone"
                  className="phone"
                  type="number"
                  placeholder="__ ___ __ __"
                  ref={phone}
                />
              </div>
              <label className="register__label" htmlFor="password">
                Parol
              </label>
              <input
                className="register__inputs"
                id="password"
                type="password"
                placeholder="Parol"
                required
                ref={password}
              />

              <label className="register__label" htmlFor="pass2">
                Parolni takrorlash
              </label>
              <input
                id="pass2"
                className="register__inputs"
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
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};
