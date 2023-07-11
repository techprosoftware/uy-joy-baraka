/* eslint-disable no-unused-vars */
import React from "react"
import ButtonPhoneIcon from "@images/home-phone.svg"
import AdsBgi from "@images/ads-bgi.webp"
import "./ads.scss"

export const Ads = () => {
  return (
    <div className="ads">
      <div className="container">
        <div className="ads__title">
          <h2>Reklamangiz uchun joy</h2>
        </div>
        <button
          className="banner-btn ads__btn"
          href="#"
        >
          <img
            width={25}
            height={25}
            src={ButtonPhoneIcon}
            alt="buton-phone"
          />
          {"Biz bilan bog’lanish"}
        </button>
      </div>
    </div>
  )
}
