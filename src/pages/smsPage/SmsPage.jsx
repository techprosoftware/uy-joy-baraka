/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./smsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthService from "../../Api/auth.service";

export const SmsPage = () => {
  const code = useRef();
  const phone = window.localStorage.getItem("phone");

  const navigate = useNavigate()

  const [time, setTime] = useState(59);

  const phoneId = useSelector((item) => item.phoneId.phoneId);

  const phoneIdFunc = async () => {
    const phoneCode = { code: code.current.value };
    const data = await AuthService.VerifyCode(phoneCode, phoneId);
    if (data?.data?.ok == true) {
      console.log("access");
      localStorage.setItem("token", data?.data?.token);
      navigate('/')
    }
  };

  useEffect(() => {
    // console.log(phoneId);
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const handleSubmit = (e) => {
    e.preventDefault();

    phoneIdFunc();
  };
  return (
    <>
      <div className="sms__inner ">
        <div className="container">
          <div className="sms__wrapper">
            <h3>Kodni kiriting</h3>
            <p className="mt-2">
              Quyidagi telefon raqamga kod yuborildi{" "}
              {phone ? "+998" + phone : ""}
            </p>

            <form onSubmit={handleSubmit} className="sms__form">
              <div className="d-flex align-items-center">
                {" "}
                <input
                  ref={code}
                  type="number"
                  placeholder="Kodni Kiriting"
                />{" "}
                <span className="second">{time} sek</span>
              </div>

              <button type="submit">Yuborish</button>

              <div>
                <Link to="/register">Telefon raqamni almashtirish?</Link>
                <Link to="/login">Ro’yxatdan o’tganmisiz?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
