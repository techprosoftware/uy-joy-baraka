/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./HomeSearch.scss";
import { BiFilter } from "react-icons/bi";

import { Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/city/citydAction";

export const HomeSearch = () => {
  const [type, setType] = useState();
  const [price_type, setPrice_type] = useState();
  const [city, setCitys] = useState();

  // REDUX
  const search = useRef();

  //
  const handleChange1 = (value) => {
    console.log(`selected ${value}`);
    setType(value);
  };
  //
  const handleChange2 = (value) => {
    console.log(`selected ${value}`);
    setPrice_type(value);
  };
  //
  const handleChange3 = (value) => {
    console.log(`selected ${value}`);
    setCity(value);
  };

  const [openSelect, setOpenSelect] = useState(false);

  const handleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitSearch = (e) => {
    e.preventDefault();
     dispatch(setCity(search.current.value));

    navigate("/card-search");
  };

  return (
    <div className="search__inner">
      <div className="container">
        <div className="search__wrap">
          <div className="search__select">
            <a className="dropdown__btn " href="#" onClick={handleSelect}>
              <BiFilter /> <span className={`filter__btn `}>Filter</span>
            </a>

            <ul
              className={`filter__select mt-4 ${
                openSelect ? `${openSelect}` : "d-none"
              }`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  <Select
                    prefixCls="ant-select-bootstrap"
                    defaultValue="Ijara yoki sotuv"
                    style={{
                      width: 207,
                    }}
                    onChange={handleChange1}
                    options={[
                      {
                        label: "Ijara yoki sotuv",
                        options: [
                          {
                            label: "Ijara",
                            value: "rent",
                          },
                          {
                            label: "Sotuv",
                            value: "sale",
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
                    onChange={handleChange2}
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
                    onChange={handleChange3}
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
            <input
              ref={search}
              className="input__sale"
              type="text"
              placeholder="Qidirish"
            />
          </div>
          <div className="search__btn">
            <Link to={"announsearch"} onClick={handleSubmitSearch} href="#">
              Izlash
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
