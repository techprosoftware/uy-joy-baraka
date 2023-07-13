/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useState } from "react";
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
import { BiWallet } from "react-icons/bi";

import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ukflag from "@images/flag_uz.png";
import deflag from "@images/flag_uz.png";

export const Header = () => {
  const [drop, setDrop] = useState(false);
  const [burger, setBurger] = useState(false);

  const options = [
    {
      value: "O'z",
      label: (
        // <div>
        <img src={ukflag} width="30" alt="" />
        // </div>
      ),
    }, //en
    {
      value: "Rus",
      label: (
        // <div>
        <img src={deflag} width="30" alt="" />
        // </div>
      ),
    }, //de
  ];
  const [lang, setLang] = useState("O'z");

  const [langLabel, setLangLabel] = useState(options[0].label);

  function handlclick(n) {
    setLangLabel(options[n].label);
    setLang(options[n].value);
  }

  return (
    <div className="site-header fixed-top">
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
                <Link className="nav__link" to={"/upload"}>
                  + E’lon joylash
                </Link>
              </li>
              <li className="nav__item wallet-icon">
                <div className="lang__select">
                    <p>{lang}</p>
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
              <li className="nav__item wallet-icon">
                  <FaWallet />
                  <select className="nav__select">
                    <option value="usd">Usd</option>
                    <option value="som">Uzs</option>
                  </select>
                </li>
              <li className="nav__item chat-icon">
                <Link className="nav__link" to={"/messaging"}>
                  <FaComment />
                </Link>
              </li>
              <li className="nav__item heart-icon">
                <Link className="nav__link" to={"#"}>
                  <AiFillHeart />
                </Link>
              </li>
              
              <li
                className="nav__item user-icon"
                onClick={() => setDrop(!drop)}
              >
                <button className="nav__link">
                  <img
                    className="nav__img"
                    src={UserIcon}
                    alt="User info icon"
                  />
                </button>
                <div className={`drop ${drop ? "" : "visually-hidden"}`}>
                  <p className="drop__info">Mironshoh Nasimov</p>
                  <ul className="drop__list">
                    <li className="drop__item">
                      <Link className="drop__link" to={"#"}>
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
                      <Link className="drop__link logout-btn" to={"#"}>
                        Chiqish
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className={`model ${burger ? "model-open" : ""}`}>
            {/* Modal inner  */}

            <div className="model__inner">
              <button
                className={`burger ${burger ? "burger-click" : ""}`}
                onClick={() => setBurger(!burger)}
              >
                <span className="burger__top"></span>
                <span className="burger__mid"></span>
                <span className="burger__bot"></span>
              </button>
              <ul className="nav__list">
                <li className="nav__item wallet-icon">
                  <BiWallet />
                  <select className="nav__select">
                    <option value="usd">Usd</option>
                    <option value="som">Uzs</option>
                  </select>
                </li>
                <li className="nav__item chat-icon">
                  <Link className="nav__link" to={"/messaging"}>
                    <FaRegComment />
                  </Link>
                  <p>Online Chat</p>
                </li>
                <li className="nav__item heart-icon">
                  <Link className="nav__link" to={"#"}>
                    <AiOutlineHeart />
                  </Link>
                  <p>Saralangan</p>
                </li>
                <li className="nav__item lang-icon">
                  <button className="nav__link">
                    <img
                      className="nav__img"
                      src={LangUzbIcon}
                      width={74}
                      height={27}
                      alt="Language switch icon"
                    />
                  </button>
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
