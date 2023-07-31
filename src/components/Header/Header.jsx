/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import SiteLogo from "@images/logo.svg";
import TelegramIcon from "@images/telegram.png";
import InstagramIcon from "@images/instagram.png";
import FacebookIcon from "@images/facebook.png";
import TwitterIcon from "@images/twitter.png";
import PlayButtonIcon from "@images/play-button.png";
import LangUzbIcon from "@images/flag_uz.png";
import UserIcon from "@images/user-icon.svg";
import { FaComment, FaRegComment, FaWallet } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiWallet, BiSupport } from "react-icons/bi";
import { BsInfoCircle, BsPhone } from "react-icons/bs";
import { CiCircleMore, CiUser } from "react-icons/ci";

import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import uzflag from "@images/flag_uz.png";
import ruflag from "@images/flag_ru.png";
import ProfileService from "../../Api/profile.service";

export const Header = () => {
  const [drop, setDrop] = useState(false);
  const [burger, setBurger] = useState(false);

  const token = localStorage.getItem("token");

  // if(!token) location.reload()

  const options = [
    {
      value: "Uz",
      label: (
        // <div>
        <img src={uzflag} width={30} alt="" />
        // </div>
      ),
    }, //en
    {
      value: "Ru",
      label: (
        // <div>
        <img src={ruflag} width="30" alt="" />
        // </div>
      ),
    }, //de
  ];
  const [lang, setLang] = useState("O'z");

  const [langLabel, setLangLabel] = useState(options[0].label);

  const [course, setCourse] = useState("Uzs");

  function handlclick(n) {
    setLangLabel(options[n].label);
    setLang(options[n].value);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const [user, setUSer] = useState();

  const getUser = async () => {
    const data = await ProfileService.GetProfile();
    setUSer(data);
  };

  useEffect(() => {
    getUser();
  }, []);

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
                  <Link className="nav__link" to={"/upload"}>
                    + E’lon joylash
                  </Link>
                ) : (
                  <Link className="nav__link" to={"/login"}>
                    + E’lon joylash
                  </Link>
                )}
              </li>

              <li className="nav__item chat-icon">
                <Link className="nav__link" to={"/messaging"}>
                  <FaComment />
                </Link>
              </li>
              <li className="nav__item heart-icon">
                {token ? <Link className="nav__link" to={"/favorite"}>
                  <AiFillHeart />
                </Link> : <Link className="nav__link" to={"/login"}>
                  <AiFillHeart />
                </Link>}
              </li>
              <li className="nav__item lang-icon">
                <div className="lang__select">
                  {/* <p>{lang}</p> */}
                  <Dropdown className="shadow-none" as={ButtonGroup}>
                    <Dropdown.Toggle
                      className="lang__btn  shadow-none"
                      id="lng-dropdown"
                    >
                      {langLabel}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handlclick(0)}>
                        {options[0].value}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handlclick(1)}>
                        {options[1].value}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
              {!token ? (
                <li className="nav__item user-icon">
                  <Link className="nav__link" to={"/login"}>
                    {" "}
                    <img
                      className="nav__img"
                      src={UserIcon}
                      alt="User info icon"
                    />
                  </Link>
                </li>
              ) : (
                <li
                  className="nav__item user-icon"
                  onClick={() => setDrop(!drop)}
                >
                  <img
                    className="nav__img"
                    src={UserIcon}
                    alt="User info icon"
                  />

                  <div className={`drop ${drop ? "" : "visually-hidden"}`}>
                    <p className="drop__info">{user?.data?.user?.full_name}</p>
                    <ul className="drop__list">
                      <li className="drop__item">
                        <Link className="drop__link" to={"/userinfo"}>
                          Mening ma’lumotlarim
                        </Link>
                      </li>
                      <li className="drop__item">
                        <Link className="drop__link" to={"/announ/active"}>
                          E’lonlarim
                        </Link>
                      </li>
                      <li className="drop__item">
                        <Link className="drop__link" to={"/aboutus"}>
                          Biz haqimizda
                        </Link>
                      </li>
                      <li className="drop__item">
                        <p
                          style={{ cursor: "pointer" }}
                          className="drop__link logout-btn"
                          onClick={handleLogout}
                        >
                          Chiqish
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
                      <CiUser /> <p>{user?.data?.user?.full_name}</p>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">Kirish</Link> /{" "}
                      <Link to="/register">Ro'yxatdan o'tish</Link>
                    </>
                  )}
                </div>
              </div>
              <ul className="nav__list">
                <li className="nav__item chat-icon">
                  <Link
                    className="nav__link d-flex align-items-center gap-2"
                    to={"/messaging"}
                  >
                    <FaRegComment />
                    <p>Online Chat</p>
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link
                    className="nav__link d-flex align-items-center gap-2"
                    to={"/favorite"}
                  >
                    <AiOutlineHeart />
                    <p>Saralangan</p>
                  </Link>
                </li>
                <li className="nav__item lang-icon">
                  <div className="lang__select">
                    <Dropdown className="shadow-none" as={ButtonGroup}>
                      <Dropdown.Toggle
                        className="lang__btn  shadow-none"
                        id="lng-dropdown"
                      >
                        {langLabel}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handlclick(0)}>
                          {options[0].value}
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handlclick(1)}>
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
                    className="nav__link d-flex align-items-center gap-2"
                    to={"#"}
                  >
                    <BiSupport />
                    <p>Biz bilan bog'lanish</p>
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link
                    className="nav__link d-flex align-items-center gap-2"
                    to={"/aboutus"}
                  >
                    <BsInfoCircle />
                    <p>Biz haqimizda</p>
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link className="nav__link" to={"#"}>
                    <BsPhone />
                  </Link>
                  <p>Ilovani yuklash</p>
                </li>
              </ul>
              <div className="modal__items">
                <ul className="modal__list social_links">
                  <li>
                    <a href="https://t.me/uyjoybaraka">
                      <img src={TelegramIcon} alt="Telegram icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <img src={InstagramIcon} alt="Instagram icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com">
                      <img src={FacebookIcon} alt="Facebook icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <img src={TwitterIcon} alt="Twitter icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com">
                      <img src={PlayButtonIcon} alt="YouTube icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
