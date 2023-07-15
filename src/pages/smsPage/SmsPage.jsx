/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./smsPage.scss";
import { Link } from "react-router-dom";

export const SmsPage = () => {
  const phone = window.localStorage.getItem("phone");

  const [time, setTime] = useState(59);

  
  useEffect(() => {
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
  
  return (
    <>
      <div className="sms__inner ">
        <div className="container">
          <div className="sms__wrapper">
            <h3>Kodni kiriting</h3>
            <p className="mt-2">
              Quyidagi telefon raqamga kod yuborildi {phone ? phone : ""}
            </p>

            <form className="sms__form">
              <div className="d-flex align-items-center">
                {" "}
                <input type="number" placeholder="Kodni Kiriting" />{" "}
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
