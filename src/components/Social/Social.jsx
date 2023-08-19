/* eslint-disable react/jsx-no-target-blank */
import LogoSocial from "@images/logo-social.svg"
// import "./social.scss";
// import { Link } from "react-router-dom";
import InstagramIcon from "@images/social-instagram-icon.svg"
import TelegramIcon from "@images/social-telegram-icon.svg"
import YouTubeIcon from "@images/social-youtube-icon.svg"

const Social = () => {
  return (
    <div className="social">
      <div className="container">
        <div className="social__inner">
          <img
            className="social__logo"
            src={LogoSocial}
            width={190}
            height={85}
            alt="Site logo"
          />
          <div className="social__title">
            <h2>Bizni ijtimoiy tarmoqlarda kuzating</h2>
          </div>
          <ul className="social__list">
            <li className="social__item">
              <a
                target="_blank"
                href="https://www.youtube.com/@UyjoyBaraka"
                className="social__link"
              >
                <img
                  className="social__icon"
                  src={YouTubeIcon}
                  width={35}
                  height={35}
                  alt="Youtube icon"
                />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                href="https://www.instagram.com/uyjoy_baraka/"
                className="social__link"
              >
                <img
                  className="social__icon"
                  src={InstagramIcon}
                  width={35}
                  height={35}
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                href="https://t.me/uy_joybarakabor"
                className="social__link"
              >
                <img
                  className="social__icon"
                  src={TelegramIcon}
                  width={35}
                  height={35}
                  alt="Facebook icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Social
