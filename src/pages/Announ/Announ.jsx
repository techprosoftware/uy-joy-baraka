/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Announ.scss";
import { BackButton } from "@components/BackButton/BackButton";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ActiveCard } from "../../components/ActiveCard/ActiveCard";
import { DeactiveCard } from "../../components/DeactiveCard/DeactiveCard";

export const Announ = () => {

  return (
    <div className="announ__inner">
      <div className="container">
        <BackButton />
        <h2 className="announ__title">E’lonlarim</h2>

        <div className="announ__wrap">
          <NavLink
            to="/announ/active"
            className={({ isActive }) =>
              isActive ? "announ__active active" : "announ__active"
            }
          >
            Faol
          </NavLink>
          <NavLink
            to="/announ/deactive"
            className={({ isActive }) => (isActive ? "announ__active active" : "announ__active")}
          >
            Faol emas
          </NavLink>
        </div>

        <Routes>
          <Route path="/active" element={<ActiveCard/>} />
          <Route path="/deactive" element={<DeactiveCard/>} />
        </Routes>
      </div>
    </div>
  );
};
