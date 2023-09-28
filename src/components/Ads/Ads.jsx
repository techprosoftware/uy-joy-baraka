/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import ButtonPhoneIcon from "@images/home-phone.svg";
import { useTranslation } from "react-i18next";
import AnnounService from "../../Api/announ.service";
import { BASE_URL } from "../../Api/api";

const Ads = () => {
  const { t } = useTranslation();

  const [ads, setAds] = useState();

  const [checkAsd, setCheckAds] = useState(true)

  const getAdsFunc = async () => {
    try {
      const response = await AnnounService.getAdsMin();
      console.log(response);
      if (response.status === 200) {
        setAds(response.data?.ads);
      }else {
        setCheckAds(false)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {
    getAdsFunc();
  }, []);



  return (
    <div className="container">
      {checkAsd ? (
        <div className=" mb-4">
          <a target="_blank" href={ads?.link}>
            <img
              className="ads__img mt-4"
              src={BASE_URL + ads?.img_web}
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
