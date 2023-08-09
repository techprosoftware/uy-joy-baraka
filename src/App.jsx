/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Public } from "./pages/Public/Public";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { SmsPage } from "./pages/smsPage/SmsPage";

import "react-loading-skeleton/dist/skeleton.css";
import i18next from "i18next";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import { BackTop } from "antd";
import { lang } from "./language/lang";

function App() {

  i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: localStorage.getItem('lang') || 'Uz',
   
    resources: {
      Uz: {
        translation: lang.Uz
      },  Ru: {
        translation: lang.Ru
      }
    }
  });

  return (
    <>
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sms" element={<SmsPage />} />
      </Routes>
     
      <div className="back">
        <BackTop />
      </div>
    </>
  );
}

export default App;
