/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./HomeSearch.scss";
import { BiFilter } from "react-icons/bi";

import { Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/city/citydAction";
import { regions } from "./data"
import { Search } from "./Search"
import SearchService from "@api/search.service"
import LoadingImg from "@images/card-single-loading.svg"

export const HomeSearch = () => {
  const [type, setType] = useState();
  const [price_type, setPrice_type] = useState();
  const [city, setCitys] = useState();
  const [searchResult, setSearchResult] = useState( { isLoading: false, data: [] } )
  // console.log(city);

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
    setCitys(value);
  };

  const [openSelect, setOpenSelect] = useState(false);

  const handleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault()

    if(!city && !type && !price_type) {
      return
    }else {
      localStorage.removeItem('searchCity')
      localStorage.setItem('city', city)
      localStorage.setItem('type', type)
      localStorage.setItem('price_type', price_type)
      navigate("/card-search");
  
    }

   
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!search.current.value.trim() == "") {
      localStorage.setItem('searchCity', search.current.value)
        navigate("/card-search");
      
    }else {
      return
    }
  };

  const changeInput = async (evt)=> {
    setSearchResult({isLoading: true, data: []})
    console.log(evt.target.value);
    const currentValue = evt.target.value
    
    if (currentValue !== "" && currentValue.trim()) {
      const response = await (await SearchService.searchOnInput(currentValue))
      console.log(response);
      setSearchResult({isLoading: false, data: response.data.posts})
    } else {
      setSearchResult({isLoading: false, data: []})
    }
  }

  return (
    <div className="search__inner">
      <div className="container">
        <div className="search__wrap">
          <div className="search__select">
            <a className="dropdown__btn " href="#" onClick={handleSelect}>
              <BiFilter /> <span className={`filter__btn `}>Filter</span>
            </a>

            <ul
              className={`filter__select ${
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
                        options: regions,
                      },
                    ]}
                  />
                </a>
              </li>

              <li className="dropdown-item">
                <button type="submit" onClick={handleSubmit} className="send__button w-100" href="#">
                  Filtrlash
                </button>
              </li>
            </ul>
            <div className="search">
              <input
                ref={search}
                onKeyDown={changeInput}
                required
                className="input__sale"
                type="text"
                placeholder="Qidirish"
              />
              {!searchResult.isLoading ? <Search data={searchResult.data}/> : ""}
            </div>
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
