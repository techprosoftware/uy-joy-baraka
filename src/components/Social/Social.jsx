import LogoSocial from "@images/logo-social.svg"
import "./social.scss"
import { Link } from "react-router-dom"
import FacebookIcon from "@images/social-facebook-icon.svg"
import InstagramIcon from "@images/social-instagram-icon.svg"
import TelegramIcon from "@images/social-telegram-icon.svg"

export const Social = () => {
  return (
    <div className="social">
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
            <Link
              className="social__link"
              to={`#`}
            >
              <img
                className="social__icon"
                src={FacebookIcon}
                width={35}
                height={35}
                alt="Facebook icon"
              />
            </Link>
          </li>
          <li className="social__item">
            <Link
              className="social__link"
              to={`#`}
            >
              <img
                className="social__icon"
                src={InstagramIcon}
                width={35}
                height={35}
                alt="Facebook icon"
              />
            </Link>
          </li>
          <li className="social__item">
            <Link
              className="social__link"
              to={`#`}
            >
              <img
                className="social__icon"
                src={TelegramIcon}
                width={35}
                height={35}
                alt="Facebook icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
