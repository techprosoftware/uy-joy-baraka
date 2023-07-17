/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./HomeSearch.scss";
import { BiFilter } from "react-icons/bi";

import { Select } from "antd";

export const HomeSearch = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [openSelect, setOpenSelect] = useState(false);

  const handleSelect = () => {
    setOpenSelect(!openSelect);
    console.log(openSelect);
  };

  console.log(openSelect);
  return (
    <div className="search__inner">
      <div className="container">
        <div className="search__wrap">
          <div className="search__select">
              <a className="dropdown__btn " href="#" onClick={handleSelect}>
                <BiFilter />{" "}
                <span className={`filter__btn `}>Filter</span>
              </a>

              <ul className={`filter__select ${openSelect ? `${openSelect}` : 'd-none'}`}>
                <li>
                  <a className="dropdown-item" href="#">
                    <Select
                      defaultValue="Ijara yoki sotuv"
                      style={{
                        width: 207,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          label: "Ijara yoki sotuv",
                          options: [
                            {
                              label: "Ijara",
                              value: "ijara",
                            },
                            {
                              label: "Sotuv",
                              value: "sotuv",
                            },
                          ],
                        },
                      ]}
                    />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item bootstrap-dropdown" href="#">
                    <Select
                      prefixCls="ant-select-bootstrap"
                      defaultValue="Valyuta bo'yicha"
                      style={{
                        width: 207,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          label: "Valyuta bo'yicha",
                          options: [
                            {
                              label: "So'm",
                              value: "sum",
                            },
                            {
                              label: "Dollar",
                              value: "dollar",
                            },
                          ],
                        },
                      ]}
                    />
                  </a>
                </li>

                <li>
                  <a className="dropdown-item " href="#">
                    <Select
                      prefixCls="ant-select-bootstrap"
                      defaultValue="Viloyatlar"
                      style={{
                        width: 207,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          label: "Viloyatlar",
                          options: [
                            {
                              label: "Andijon",
                              value: "andijon",
                            },
                            {
                              label: "Buxoro",
                              value: "buxoro",
                            },
                            {
                              label: "Farg'ona",
                              value: "fargona",
                            },
                            {
                              label: "Jizzax",
                              value: "jizzax",
                            },
                            {
                              label: "Xorazm",
                              value: "xorazm",
                            },
                            {
                              label: "Namangan",
                              value: "namangan",
                            },
                            {
                              label: "Navoiy",
                              value: "navoiy",
                            },
                            {
                              label: "Qashqadaryo",
                              value: "qashqadaryo",
                            },
                            {
                              label: "Qoraqalpog'iston Respublikasi",
                              value: "qoraqalpogiston",
                            },
                            {
                              label: "Samarqand",
                              value: "samarqand",
                            },
                            {
                              label: "Sirdaryo",
                              value: "sirdaryo",
                            },
                            {
                              label: "Surxondaryo",
                              value: "surxondaryo",
                            },
                            {
                              label: "Toshkent shahri",
                              value: "toshkentShahri",
                            },
                            {
                              label: "Toshkent viloyati",
                              value: "toshkentViloyati",
                            },
                          ],
                        },
                      ]}
                    />
                  </a>
                </li>

                <li className="dropdown-item">
                  <button className="send__button w-100" href="#">
                    Filtrlash
                  </button>
                </li>
              </ul>
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
