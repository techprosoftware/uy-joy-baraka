/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
// import "./header.scss"
import { Link } from "react-router-dom"
import SiteLogo from "@images/logo.svg"
import TelegramIcon from "@images/telegram.png"
import InstagramIcon from "@images/instagram.png"
import FacebookIcon from "@images/facebook.png"
import TwitterIcon from "@images/twitter.png"
import PlayButtonIcon from "@images/play-button.png"
import { Dropdown, ButtonGroup } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import uzflag from "@images/flag_uz.png"
import ruflag from "@images/flag_ru.png"
import ProfileService from "../../Api/profile.service"
import { useTranslation } from "react-i18next"

export const Header = () => {
  const [drop, setDrop] = useState(false)
  const [burger, setBurger] = useState(false)

  // const [changeLang, setChangeLang] = useState('uz')

  const { t, i18n } = useTranslation()

  const token = localStorage.getItem("token")

  // if(!token) location.reload()

  const options = [
    {
      value: "O'zbekcha",
      label: (
        <img
          src={uzflag}
          width={30}
          alt=""
        />
      ),
    },
    {
      value: "Русский",
      label: (
        <img
          src={ruflag}
          width="30"
          alt=""
        />
      ),
    },
  ]
  const [lang, setLang] = useState("Uz")

  console.log(lang)

  const [langLabel, setLangLabel] = useState(options[0].label)

  const [course, setCourse] = useState("Uzs")

  const [flag, setFlag] = useState(localStorage.getItem("uz") || 0)

  function handlclick(n) {
    setLangLabel(options[n].label)
    setLang(options[n].value)
  }

  useEffect(() => {
    handlclick(localStorage.getItem("uz") || 0)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  const [user, setUSer] = useState()

  const getUser = async () => {
    const data = await ProfileService.GetProfile()
    setUSer(data)
  }

  // console.log(user);

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="site-header fixed-top ">
      <div className="container">
        <div className="site-haeder__inner">
          <button
            className={` burger  ${burger ? "burger-click" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span className="burger__top"></span>
            <span className="burger__mid"></span>
            <span className="burger__bot"></span>
          </button>
          <Link to="/">
            <img
              className="site-logo"
              src={SiteLogo}
              width={133}
              height={59}
              alt="Site logo"
            />
          </Link>
          <nav className="nav d-flex align-items-center">
            <ul className="nav__list">
              <li className="nav__item new-poster">
                {token ? (
                  <Link
                    className="nav__link"
                    to={"/upload"}
                  >
                    + {t("header.addpost")}
                  </Link>
                ) : (
                  <Link
                    className="nav__link"
                    to={"/login"}
                  >
                    + {t("header.addpost")}
                  </Link>
                )}
              </li>

              <li className="nav__item chat-icon">
                <Link
                  className="nav__link"
                  to={"/messaging"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fefefe"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </Link>
              </li>
              <li className="nav__item heart-icon">
                {token ? (
                  <Link
                    className="nav__link"
                    to={"/favorite"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fefefe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {/* <AiFillHeart /> */}
                  </Link>
                ) : (
                  <Link
                    className="nav__link"
                    to={"/login"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fefefe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {/* <AiFillHeart /> */}
                  </Link>
                )}
              </li>
              <li className="nav__item lang-icon">
                <div className="lang__select">
                  {/* <p>{lang}</p> */}
                  <Dropdown
                    className="shadow-none"
                    as={ButtonGroup}
                  >
                    <Dropdown.Toggle
                      className="lang__btn  shadow-none"
                      id="lng-dropdown"
                    >
                      {langLabel}
                    </Dropdown.Toggle>

                    <Dropdown.Menu defaultValue={i18n.language}>
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("lang", "Uz")
                          i18n.changeLanguage("Uz")
                          localStorage.setItem("uz", 0)
                          handlclick(localStorage.getItem("uz") || 0)
                        }}
                      >
                        {options[0].value}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("lang", "Ru")
                          i18n.changeLanguage("Ru")
                          localStorage.setItem("uz", 1)
                          handlclick(localStorage.getItem("uz") || 1)
                        }}
                      >
                        {options[1].value}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
              {!token ? (
                <li className="nav__item user-icon">
                  <Link
                    className="nav__link"
                    to={"/login"}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fefefe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                      ></circle>
                    </svg>
                  </Link>
                </li>
              ) : (
                <li
                  className="nav__item user-icon"
                  onClick={() => setDrop(!drop)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fefefe"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    ></circle>
                  </svg>

                  <div className={`drop ${drop ? "" : "visually-hidden"}`}>
                    <p className="drop__info">{user?.data?.user?.full_name}</p>
                    <ul className="drop__list">
                      <li className="drop__item">
                        <Link
                          className="drop__link"
                          to={"/userinfo"}
                        >
                          {t("profile.userinfo")}
                        </Link>
                      </li>
                      <li className="drop__item">
                        <Link
                          className="drop__link"
                          to={"/announ/active"}
                        >
                          {t("profile.posts")}{" "}
                        </Link>
                      </li>
                      <li className="drop__item">
                        <Link
                          className="drop__link"
                          to={"/aboutus"}
                        >
                          {t("profile.aboutme")}
                        </Link>
                      </li>
                      <li className="drop__item">
                        <p
                          style={{ cursor: "pointer" }}
                          className="drop__link logout-btn"
                          onClick={handleLogout}
                        >
                          {t("profile.exit")}
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </nav>
          <div className={`model ${burger ? "model-open" : ""}`}>
            {/* Modal inner  */}

            <div className="model__inner">
              <div className="close__wrapper">
                <button
                  className={`burger ${burger ? "burger-click" : ""}`}
                  onClick={() => setBurger(!burger)}
                >
                  <span className="burger__top"></span>
                  <span className="burger__bot"></span>
                </button>
                <div className="close__wrapper-register">
                  {token ? (
                    <div className="d-flex align-items-center gap-1">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4c4f4d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                        ></circle>
                      </svg>{" "}
                      <p>{user?.data?.user?.full_name}</p>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">{t("header.login")}</Link> /{" "}
                      <Link to="/register">{t("header.register")}</Link>
                    </>
                  )}
                </div>
              </div>
              <ul className="nav__list">
                <li className="nav__item chat-icon">
                  <Link
                    onClick={() => setBurger(false)}
                    className="nav__link d-flex align-items-center gap-2"
                    to={"/messaging"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008b51"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <p>{t("header.chat")}</p>
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link
                    onClick={() => setBurger(false)}
                    className="nav__link d-flex align-items-center gap-2"
                    to={"/favorite"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008b51"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <p>{t("header.sorted")}</p>
                  </Link>
                </li>
                <li className="nav__item lang-icon">
                  <div className="lang__select">
                    <Dropdown
                      className="shadow-none"
                      as={ButtonGroup}
                    >
                      <Dropdown.Toggle
                        className="lang__btn  shadow-none"
                        id="lng-dropdown"
                      >
                        {langLabel}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            localStorage.setItem("lang", "Uz")
                            i18n.changeLanguage("Uz")
                            localStorage.setItem("uz", 0)
                            handlclick(localStorage.getItem("uz") || 0)
                          }}
                        >
                          {options[0].value}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            localStorage.setItem("lang", "Ru")
                            i18n.changeLanguage("Ru")
                            localStorage.setItem("uz", 1)
                            handlclick(localStorage.getItem("uz") || 1)
                          }}
                        >
                          {options[1].value}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <p className="ms-2">{lang}</p>
                  </div>
                </li>
                <span className="close__line"></span>
                <li className="nav__item heart-icon">
                  <Link
                    onClick={() => setBurger(false)}
                    className="nav__link d-flex align-items-center gap-2"
                    to={"#"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008b51"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                      ></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line
                        x1="12"
                        y1="17"
                        x2="12.01"
                        y2="17"
                      ></line>
                    </svg>{" "}
                    <p>{t("header.callcenter")}</p>
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link
                    onClick={() => setBurger(false)}
                    className="nav__link d-flex align-items-center gap-2"
                    to={"/aboutus"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008b51"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                      ></circle>
                      <line
                        x1="12"
                        y1="16"
                        x2="12"
                        y2="12"
                      ></line>
                      <line
                        x1="12"
                        y1="8"
                        x2="12.01"
                        y2="8"
                      ></line>
                    </svg>
                    <p>{t("header.aboutme")}</p>
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link
                    onClick={() => setBurger(false)}
                    className="nav__link"
                    to={"#"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008b51"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line
                        x1="12"
                        y1="18"
                        x2="12.01"
                        y2="18"
                      ></line>
                    </svg>
                  </Link>
                  <p>{t("header.apps")}</p>
                </li>
              </ul>
              <div className="modal__items">
                <ul className="modal__list social_links">
                  <li>
                    <a href="https://t.me/uyjoybaraka">
                      <img
                        src={TelegramIcon}
                        alt="Telegram icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <img
                        src={InstagramIcon}
                        alt="Instagram icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com">
                      <img
                        src={FacebookIcon}
                        alt="Facebook icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <img
                        src={TwitterIcon}
                        alt="Twitter icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com">
                      <img
                        src={PlayButtonIcon}
                        alt="YouTube icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
