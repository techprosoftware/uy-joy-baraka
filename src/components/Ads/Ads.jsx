/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import ButtonPhoneIcon from "@images/home-phone.svg";
import { useTranslation } from "react-i18next";
import AnnounService from "../../Api/announ.service";
import { BASE_URL } from "../../Api/api";

const Ads = () => {
  const { t } = useTranslation();

  const [ads, setAds] = useState([]);
  const getAdsFunc = async () => {
    try {
      const response = await AnnounService.getAds();
      if (response.status === 200) {
        setAds(response.data?.ads || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const min = 0;
    const max = ads.length > 0 ? ads.length - 1 : 0;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  };

  useEffect(() => {
    getAdsFunc();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(generateRandomNumber, 15000);
    return () => clearInterval(intervalId);
  }, [ads]);

  return (
    <div className="container">
      {ads.length ? (
        <div className=" mb-4">
          <a target="_blank" href={ads[randomNumber]?.link}>
            <img
              className="ads__img mt-4"
              src={BASE_URL + ads[randomNumber]?.img_web}
              alt="button-phone"
            />
          </a>
        </div>
      ) : (
        <div className="ads mb-4 ps-5">
          <div className="ads__title">
            <h2>{t("homecard.adstitle")}</h2>
          </div>
          <a href="tel:+998 99 243-55-77">
            <button className="banner-btn ads__btn" href="#">
              <img
                width={25}
                height={25}
                src={ButtonPhoneIcon}
                alt="buton-phone"
              />
              {t("homebanner.callbtn")}
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Ads;
