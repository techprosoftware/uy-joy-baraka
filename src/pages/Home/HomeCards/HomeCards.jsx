/* eslint-disable no-unused-vars */

import React from "react";
import "./HomeCard.scss";
import { CardList } from "@components/CardList/CardList";
export const HomeCards = () => {
  return (
    <>
      <div className="home__card-inner">
        <div className="container">
          <h2 className="home__card-title">Sizga mos keladigan uylar</h2>
          <CardList />
        </div>
      </div>
    </>
  );
};