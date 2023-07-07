/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ActiveCard.scss";
import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
import mockCardImg from "@images/mock-img.png";

export const ActiveCard = () => {
  return (
    <>
      <div>
        <ul className="card-list">
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="1" />
              <label className="switch" htmlFor="1" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="2" />
              <label className="switch" htmlFor="2" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="3" />
              <label className="switch" htmlFor="3" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="4" />
              <label className="switch" htmlFor="4" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="5" />
              <label className="switch" htmlFor="5" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="6" />
              <label className="switch" htmlFor="6" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="7" />
              <label className="switch" htmlFor="7" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
          <li className="card">
            <div className="active__checkbtn">
              <input type="checkbox" hidden="hidden" id="8" />
              <label className="switch" htmlFor="8" />
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
              <p className="card__price">2 200 000 s'om</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
