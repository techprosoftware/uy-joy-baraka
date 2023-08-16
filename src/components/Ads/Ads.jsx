/* eslint-disable no-unused-vars */
import React from "react"
import ButtonPhoneIcon from "@images/home-phone.svg"
// import AdsBgi from "@images/12.png"
// import "./ads.scss"
import { useTranslation } from "react-i18next";

export const Ads = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="ads mb-4">
      <div className="container">
        <div className="ads__title">
          <h2>{t("homecard.adstitle")}</h2>
        </div>
        <a href="tel:+998 91 599-99-47">
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
    </div>
  );
};
