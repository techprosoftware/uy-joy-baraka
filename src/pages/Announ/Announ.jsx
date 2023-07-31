/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Announ.scss";
import { BackButton } from "@components/BackButton/BackButton";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ActiveCard } from "../../components/ActiveCard/ActiveCard";
import { DeactiveCard } from "../../components/DeactiveCard/DeactiveCard";
import { useTranslation } from 'react-i18next';

export const Announ = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="announ__inner">
      <div className="container">
        <BackButton />
        <h2 className="announ__title">{t('announ.announs')}</h2>
        <hr className="m-0 mt-1" />
        <div className="announ__wrap mb-4">
          <NavLink
            to="/announ/active"
            className={({ isActive }) =>
              isActive ? "announ__active active" : "announ__active"
            }
          >
            {t('announ.active')}
          </NavLink>
          <NavLink
            to="/announ/deactive"
            className={({ isActive }) =>
              isActive ? "announ__active active" : "announ__active"
            }
          >
            {t('announ.deactive')}
          </NavLink>
        </div>

        <Routes>
          <Route path="/active" element={<ActiveCard />} />
          <Route path="/deactive" element={<DeactiveCard />} />
        </Routes>
      </div>
    </div>
  );
};
