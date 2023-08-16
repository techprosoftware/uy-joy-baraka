/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import buttonPhone from "../../../../public/assets/images/home-phone.svg";
// import "./HomeBanner.scss";
import { HomeSearch } from "../../../components/HomeSearch/HomeSearch";
import { useTranslation } from "react-i18next";

export const HomeBanner = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <HomeSearch />{" "}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="home-banner">
              <div className="container">
                <div className="home-banner-wrap">
                  <div className="banner-wrapper">
                    <h1 className="banner-title">{t("homebanner.title")}</h1>

                    <a href="tel:+998 91 599-99-47">
                      <button className="banner-btn" href="#">
                        <img src={buttonPhone} alt="buton-phone" />
                        {t("homebanner.callbtn")}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="home-banner">
              <div className="container">
                <div className="home-banner-wrap">
                  <div className="banner-wrapper">
                    <h1 className="banner-title">{t("homebanner.title")} </h1>

                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />{" "}
                      {t("homebanner.callbtn")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="home-banner">
              <div className="container">
                <div className="home-banner-wrap">
                  <div className="banner-wrapper">
                    <h1 className="banner-title">{t("homebanner.title")}</h1>

                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />{" "}
                      {t("homebanner.callbtn")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
