/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from "react";
// import "./footer.scss";
// Store links
import AppStorePic from "@images/footer_store-link_iphone.svg";
import PlayStorePic from "@images/footer_store-link_android.svg";
import Logo from "@images/logo.svg";
// Footer icons
import TelegramIcon from "@images/tg-icon.svg";
import InstagramIcon from "@images/insta-icon.svg";
// import FacebookIcon from "@images/facebook-icon.svg";
// import TwitterIcon from "@images/twitter-icon.svg";
import YouTubeIcon from "@images/youtube-icon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Pre footer */}
      <div className="upper-footer">
        <div className="container">
          <div className="pre-footer mt-5">
            <div className="pre-footer__inner">
              <img
                className="pre-footer__bg"
                src="@images/footer_bg-phone.png"
                alt=""
              />
            </div>
            <div className="pre-footer__inner">
              <h2 className="pre-footer__text">{t("footer.appstitle")}</h2>
            </div>
            <div className="pre-footer__inner">
              {/* Pre links [1] */}
              <div className="pre-footer__links">
                <a
                  className="pre-footer__button"
                  href="https://www.apple.com/uz/app-store/"
                >
                  <img src={AppStorePic} alt="" />
                </a>
              </div>
              {/* Pre links [2] */}
              <div className="pre-footer__links">
                <a
                  className="pre-footer__button"
                  href="https://play.google.com/store/games?pli=1"
                >
                  <img src={PlayStorePic} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer__items">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="footer__items">
              <Link className="footer__aboutLink" to="/aboutus">
                {t("header.aboutme")}
              </Link>
              <ul className="footer__list links">
                <li>
                  <a href="https://t.me/uy_joybarakabor">
                    {t("footer.partners")}
                  </a>
                </li>
                <li>
                  <a href="https://t.me/uy_joybarakabor">{t("footer.ads")}</a>
                </li>
                <li>
                  <a href="tel:+998 91 599-99-47">{t("footer.callme")}</a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <ul className="footer__list social_links">
                <li>
                  <a
                    href="https://www.instagram.com/uyjoy_baraka/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TelegramIcon} alt="Telegram icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/uyjoy_baraka/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img target="_blank" src={InstagramIcon} alt="Instagram icon" />
                  </a>
                </li>
                {/* <li>
                  <a href="https://facebook.com">
                    <img src={FacebookIcon} alt="Facebook icon" />
                  </a>
                </li> */}
                {/* <li>
                  <a href="https://twitter.com">
                    <img src={TwitterIcon} alt="Twitter icon" />
                  </a>
                </li> */}
                <li>
                  <a target="_blank" href="https://www.youtube.com/@UyjoyBaraka">
                    <img src={YouTubeIcon} alt="YouTube icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__innerTitle">
            <p>
              «uy-joy baraka.uz» сайтида эълон қилинган материаллардан нусха
              кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят
              ёзма розилиги билан амалга оширилиши мумкин. Гувоҳнома: №0987.
              Берилган санаси: 22.06.2023 йил. Муассис: «WEB EXPERT» МЧЖ.
              Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов кўчаси,
              12-уй. Электрон манзил: info@uyjoy.uz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
