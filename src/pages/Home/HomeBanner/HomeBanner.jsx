/* eslint-disable no-unused-vars */
import React, { lazy, useState } from "react";
import buttonPhone from "../../../../public/assets/images/home-phone.svg";
// import "./HomeBanner.scss";
const HomeSearch = lazy(() => import("@components/HomeSearch/HomeSearch"));
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HomeBanner = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <HomeSearch />{" "}
      <div className="home-banner-inner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="home-banner">
            <div className="container">
              <div className="home-banner-wrap">
                <div className="banner-wrapper">
                  <h1 className="banner-title">{t("homebanner.title")}</h1>

                  <a href="tel:+998 99 243-55-77">
                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />
                      {t("homebanner.callbtn")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-banner">
            <div className="container">
              <div className="home-banner-wrap">
                <div className="banner-wrapper">
                  <h1 className="banner-title">{t("homebanner.title")}</h1>

                  <a href="tel:+998 99 243-55-77">
                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />
                      {t("homebanner.callbtn")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-banner">
            <div className="container">
              <div className="home-banner-wrap">
                <div className="banner-wrapper">
                  <h1 className="banner-title">{t("homebanner.title")}</h1>

                  <a href="tel:+998 99 243-55-77">
                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />
                      {t("homebanner.callbtn")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-banner">
            <div className="container">
              <div className="home-banner-wrap">
                <div className="banner-wrapper">
                  <h1 className="banner-title">{t("homebanner.title")}</h1>

                  <a href="tel:+998 99 243-55-77">
                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />
                      {t("homebanner.callbtn")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-banner">
            <div className="container">
              <div className="home-banner-wrap">
                <div className="banner-wrapper">
                  <h1 className="banner-title">{t("homebanner.title")}</h1>

                  <a href="tel:+998 99 243-55-77">
                    <button className="banner-btn" href="#">
                      <img src={buttonPhone} alt="buton-phone" />
                      {t("homebanner.callbtn")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </>
  );
};

export default HomeBanner;
