/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Public } from "./pages/Public/Public";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { SmsPage } from "./pages/smsPage/SmsPage";
import "react-loading-skeleton/dist/skeleton.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from "./language/lang";
import { ToastContainer } from "react-toastify";
import { Edit } from "./pages/Edit/Edit";
import { EditSms } from "./pages/EditSms/EditSms";
import { EditPassword } from "./pages/EditPassword/EditPassword";

function App() {
  let langs = localStorage.getItem("lang") || "Uz";


  i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: langs,
    defaultLocale: "Uz",

    resources: {
      Uz: {
        translation: lang.Uz,
      },
      Ru: {
        translation: lang.Ru,
      },
    },
  });
 

  return (
    <>
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sms" element={<SmsPage />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/edit-sms" element={<EditSms />} />
        <Route path="/edit-password" element={<EditPassword />} />
      </Routes>

      {
        <a href="#" className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000b8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 12l-4-4-4 4M12 16V9" />
          </svg>
        </a>
      }

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
    </>
  );
}

export default App;
