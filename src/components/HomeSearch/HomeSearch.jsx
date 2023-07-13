/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeSearch.scss";
import { BiFilter } from "react-icons/bi";

export const HomeSearch = () => {
  return (
    <div className="search__inner">
      <div className="container">
        <div className="search__wrap">
          <div className="search__select">
            <div className="dropdown">
              <a
                className="dropdown__btn "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <BiFilter /> <span className="filter__btn">Filter</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    <select className="select__sale">
                      <option selected disabled value="def">
                        Ijara yoki sotuv uchun
                      </option>
                      <option value="ijara">Ijara</option>
                      <option value="sotuv">Sotuv</option>
                    </select>
                  </a>
                </li>
                <ul className="d-flex justify-content-between flex-column">
                  <li>
                    <a className="dropdown-item" href="#">
                      <select className="select__sale select__region">
                        <option value="toshkent">Toshkent shahri</option>
                        <option value="andijon">Andijon</option>
                        <option value="buxoro">Buxoro</option>
                        <option value="fargona">Farg`ona</option>
                        <option value="jizzax">Jizzax</option>
                        <option value="xorazm">Xorazm</option>
                        <option value="namangan">Namangan</option>
                        <option value="navoiy">Navoiy</option>
                        <option value="qashqadaryo">Qashqadaryo</option>
                        <option value="samarqand">Samarqand</option>
                        <option value="sirdaryo">Sirdaryo</option>
                        <option value="surxondaryo">Surxondaryo</option>
                        <option value="toshkent-obl">Toshkent viloyati</option>
                        <option value="xorazm">Xorazm</option>
                      </select>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <select className="select__sale select__money">
                        <option value="andijon">UZS</option>
                        <option value="buxoro">USD</option>
                      </select>
                    </a>
                  </li>
                </ul>
                <li className="dropdown-item"><button className="send__button w-100" href="#">Filtrlash</button></li>
              </ul>
            </div>
            <input className="input__sale" type="text" placeholder="Qidirish" />
          </div>
          <div className="search__btn">
            <a href="#">Izlash</a>
          </div>
        </div>
      </div>
    </div>
  );
};
