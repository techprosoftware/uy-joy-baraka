/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { lazy, useEffect, useState } from "react";
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
import axios from "axios";
import AnnounService from "../../../Api/announ.service";
import { BASE_URL } from "../../../Api/api";
const HomeBanner = () => {
  const { t, i18n } = useTranslation();

  const [ads, setAds] = useState();

  const getAdsFunc = async () => {
    const data = await AnnounService.getAds();
    // console.log(data);
    setAds(data?.data);
  };

  useEffect(() => {
    getAdsFunc();
  }, []);


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
         

          {ads?.ads?.length
            ? ads?.ads?.map((item) => (
                <>
                  <SwiperSlide key={item?.id}>
                    <div className="container">
                      <div className="home-banner-wrap1">
                        <a href={item?.link} target="_blank">
                          <img
                            className="ads__img"
                            src={BASE_URL + item?.img_web}
                            alt="buton-phone"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))
            :  <SwiperSlide>
            <div className="container">
              <div className="home-banner">
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
          </SwiperSlide>}
        </Swiper>
      </div>
    </>
  );
};

export default HomeBanner;
