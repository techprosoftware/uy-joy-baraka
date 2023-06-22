/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeSearch.scss";

export const HomeSearch = () => {
  return (
    <div className="search__inner">
      <div className="container">
        <div className="search__wrap">
          <div className="search__select">
            <select className="select__sale">
              <option selected disabled value="def">
                Ijara yoki sotuv uchun
              </option>
              <option value="ijara">Ijara</option>
              <option value="sotuv">Sotuv</option>
            </select>

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

            <select className="select__sale select__money">
              <option value="andijon">So'm</option>
              <option value="buxoro">Dollar</option>
            </select>
          </div>
          <div className="search__btn">
            <a href="#">Izlash</a>
          </div>
        </div>
      </div>
    </div>
  );
};
