/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
// import "./HomeSearch.scss"

import { Select } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCity } from "../../redux/city/citydAction"
import { regions } from "./data"
import { Search } from "./Search"
import SearchService from "@api/search.service"
import LoadingImg from "@images/card-single-loading.svg"
import { useTranslation } from "react-i18next"
import { transliterate } from "transliteration"

export const HomeSearch = () => {
  const [type, setType] = useState()
  const [price_type, setPrice_type] = useState()
  const [city, setCitys] = useState()
  const [searchResult, setSearchResult] = useState({
    isLoading: false,
    data: [],
  })

  const { t, i18n } = useTranslation()
  const search = useRef()
  const dispatch = useDispatch()
  const [openSelect, setOpenSelect] = useState(false)

  const handleSelect = () => {
    setOpenSelect(!openSelect)
  }

  const navigate = useNavigate()

  const handleChange1 = (value) => {
    setType(value)
  }

  const handleChange2 = (value) => {
    setPrice_type(value)
  }

  const handleChange3 = (value) => {
    setCitys(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!city && !type && !price_type) {
      return
    } else {
      localStorage.removeItem("searchCity")
      localStorage.setItem("city", city)
      localStorage.setItem("type", type)
      localStorage.setItem("price_type", price_type)
      navigate("/card-search")
    }
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    if (!search.current.value.trim() === "") {
      localStorage.setItem("searchCity", search.current.value)
      navigate("/card-search")
    } else {
      return
    }
  }

  const debounceMe = (func, delayTime) => {
    let timeOut
    return function (...args) {
      clearTimeout(timeOut)
      timeOut = setTimeout(() => func.apply(this, args), delayTime)
    }
  }

  const changeInput = useRef(
    debounceMe(async (evt) => {
      setSearchResult({ isLoading: true, data: [] })
      const currentValue = evt.target.value

      if (currentValue !== "" && currentValue.trim()) {
        try {
          const response = await SearchService.searchOnInput(currentValue)
          console.log(response)

          //* Searchs the latin or crylic text 
          const searchTermLatin = transliterate(currentValue) 
          const responseLatin = await SearchService.searchOnInput(
            searchTermLatin
          )
          console.log(responseLatin)

          //* Collect as a combined posts(texts)
          const combinedPosts = [
            ...response.data.posts,
            ...responseLatin.data.posts,
          ]
          setSearchResult({ isLoading: false, data: combinedPosts })
        } catch (error) {
          console.error("Error searching:", error)
          setSearchResult({ isLoading: false, data: [] })
        }
      } else {
        setSearchResult({ isLoading: false, data: [] })
      }
    }, 1000)
  ).current

  return (
    <div className="search__inner">
      <div className="container">
        <div className="search__wrap">
          <div className="search__select">
            <a
              className="dropdown__btn "
              href="#"
              onClick={handleSelect}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#008b51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  x1="4"
                  y1="21"
                  x2="4"
                  y2="14"
                ></line>
                <line
                  x1="4"
                  y1="10"
                  x2="4"
                  y2="3"
                ></line>
                <line
                  x1="12"
                  y1="21"
                  x2="12"
                  y2="12"
                ></line>
                <line
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="3"
                ></line>
                <line
                  x1="20"
                  y1="21"
                  x2="20"
                  y2="16"
                ></line>
                <line
                  x1="20"
                  y1="12"
                  x2="20"
                  y2="3"
                ></line>
                <line
                  x1="1"
                  y1="14"
                  x2="7"
                  y2="14"
                ></line>
                <line
                  x1="9"
                  y1="8"
                  x2="15"
                  y2="8"
                ></line>
                <line
                  x1="17"
                  y1="16"
                  x2="23"
                  y2="16"
                ></line>
              </svg>{" "}
              <span className={`filter__btn `}>{t("searchpage.filter")}</span>
            </a>

            <ul
              className={`filter__select ${
                openSelect ? `${openSelect}` : "d-none"
              }`}
            >
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  <Select
                    prefixCls="ant-select-bootstrap"
                    defaultValue={t("searchpage.sale")}
                    style={{
                      width: 207,
                    }}
                    onChange={handleChange1}
                    options={[
                      {
                        label: `${t("searchpage.sale")}`,
                        options: [
                          {
                            label: `${t("addannoun.rent")}`,
                            value: "rent",
                          },
                          {
                            label: `${t("addannoun.sale")}`,
                            value: "sale",
                          },
                        ],
                      },
                    ]}
                  />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item bootstrap-dropdown"
                  href="#"
                >
                  <Select
                    prefixCls="ant-select-bootstrap"
                    defaultValue={t("searchpage.type")}
                    style={{
                      width: 207,
                    }}
                    onChange={handleChange2}
                    options={[
                      {
                        label: `${t("searchpage.type")}`,
                        options: [
                          {
                            label: `${t("addannoun.sum")}`,
                            value: "sum",
                          },
                          {
                            label: `${t("addannoun.usd")}`,
                            value: "dollar",
                          },
                        ],
                      },
                    ]}
                  />
                </a>
              </li>

              <li>
                <a
                  className="dropdown-item "
                  href="#"
                >
                  <Select
                    prefixCls="ant-select-bootstrap"
                    defaultValue={t("searchpage.region")}
                    style={{
                      width: 207,
                    }}
                    onChange={handleChange3}
                    options={[
                      {
                        label: `${t("searchpage.region")}`,
                        options: regions,
                      },
                    ]}
                  />
                </a>
              </li>

              <li className="dropdown-item">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="send__button w-100"
                  href="#"
                >
                  {t("searchpage.filter")}
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
                placeholder={t("searchpage.search")}
              />
              {!searchResult.isLoading ? (
                <Search data={searchResult.data} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="search__btn">
            <Link
              to={"announsearch"}
              onClick={handleSubmitSearch}
              href="#"
            >
              {t("homebanner.searchbtn")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
