/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from "react";
import "./DeactiveCard.scss";
import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
import mockCardImg from "@images/mock-img.png";
import deleteBtn from "@images/delete-btn.svg"

export const DeactiveCard = () => {
  return (
    <>
      <div>
        <ul className="card-list">
          <li className="card">
            <div className="active__check_btn">
              <img src={deleteBtn} alt="" />
            </div>

            <img className="card__img" src={mockCardImg} height={222} />
            <div className="card__wrap">
              <div className="card__inner">
                <span className="card__city">Toshkent</span>
                <div className="card__right">
                  <span className="card__view me-2">3232</span>
                  <button className="card__like">
                    <img
                      className="card__like-img"
                      src={CardULikeIcon}
                      width={17}
                      height={16}
                      alt="Card like button image"
                    />
                  </button>
                </div>
              </div>
              <h3 className="card__body">
                Olmazor tumanida joylashgan 2x kvartira ijaraga beriladi
              </h3>
              <button className="active__btn">Faollashtirish</button>
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          
          
        </ul>
      </div>
    </>
  );
};
