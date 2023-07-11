/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import SiteLogo from "@images/logo.svg";
import ChatIcon from "@images/chat-icon.svg";
import HeartIcon from "@images/saved-heart.svg";
import LangUzbIcon from "@images/lang-uz.svg";
import UserIcon from "@images/user-icon.svg";
import { FaComment, FaRegComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export const Header = () => {
  const [drop, setDrop] = useState(false);
  const [burger, setBurger] = useState(false);

  return (
    <div className="site-header">
      <div className="container">
        <div className="site-haeder__inner">
          <Link to="/">
            <img
              className="site-logo"
              src={SiteLogo}
              width={133}
              height={59}
              alt="Site logo"
            />
          </Link>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item new-poster">
                <Link className="nav__link" to={"/upload"}>
                  + E’lon joylash
                </Link>
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
              <li
                className="nav__item user-icon"
                onClick={() => setDrop(!drop)}
              >
                <button className="nav__link">
                  <img
                    className="nav__img"
                    src={UserIcon}
                    width={32}
                    height={32}
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
            <button
              className={`burger ${burger ? "burger-click" : ""}`}
              onClick={() => setBurger(!burger)}
            >
              <span className="burger__top"></span>
              <span className="burger__mid"></span>
              <span className="burger__bot"></span>
            </button>
          </nav>
          <div className={`model ${burger ? "model-open" : ""}`}>
            <div className="model__inner">
              <ul className="nav__list">
                <li className="nav__item new-poster">
                  <Link className="nav__link" to={"#"}>
                    + E’lon joylash
                  </Link>
                </li>
                <li className="nav__item chat-icon">
                  <Link className="nav__link" to={"#"}>
                    <FaRegComment />
                  </Link>
                </li>
                <li className="nav__item heart-icon">
                  <Link className="nav__link" to={"#"}>
                    <img
                      className="nav__img"
                      src={HeartIcon}
                      width={48}
                      height={48}
                      alt="Liked products icon"
                    />
                  </Link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
