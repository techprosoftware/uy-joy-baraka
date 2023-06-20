/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./HomeCard.scss";
import data from "../../../components/Cards/data";
import { Card } from "../../../components/Cards/Cards";

export const HomeCards = () => {
  const [card, setCard] = useState();
  useEffect(() => {
    data.forEach((item) => {
      setCard(item);
      console.log(item);
    });
  }, []);
  // console.log(card);

  return (
    <>
      <div className="home__card__inner">
        <div className="container">
          <Card card={card} />
        </div>
      </div>
    </>
  );
};
