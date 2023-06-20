/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./smsPage.scss";

export const SmsPage = () => {
  const phone = window.localStorage.getItem("phone");

  const [time, setTime] = useState(9);

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
                <a href="/register">Telefon raqamni almashtirish?</a>
                <a href="/login">Ro’yxatdan o’tganmisiz?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
