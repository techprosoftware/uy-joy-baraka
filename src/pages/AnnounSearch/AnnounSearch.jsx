/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
// import "./AnnounSearch.scss";
import { Link, useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import AnnounService from "../../Api/announ.service"
import { CardSkeleton } from "@components/Cards/CardSkeleton"
import { BASE_URL } from "@/Api/api"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"
import SearchService from "../../Api/search.service"
import { useTranslation } from "react-i18next"
import CardService from "../../Api/card.service"

const AnnounSearch = () => {
  const { t } = useTranslation()

  const cityName = localStorage.getItem("searchCity")
  const city = localStorage.getItem("city")
  const type = localStorage.getItem("type")
  const price_type = localStorage.getItem("price_type")

  console.log(cityName)

  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  })

  const getSearchCard = async () => {
    const data = await SearchService.searchOnInput(
      cityName,
      city,
      type,
      price_type
    )
    // console.log(data);
    try {
      if (data?.status === 200) {
        setActiveCard({
          isLoading: false,
          data: data.data,
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getSearchCard()
  }, [])

  const [likeImgSrc, setLikeImgSrc] = useState(CardULikeIcon)

  console.log(activeCard)
  const newData = activeCard?.data?.posts

  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const navigate = useNavigate()
  const handleClick = async (evt) => {
    const slug = evt.target.name
    const id = evt.target.id
    const targetTag = evt.target.className

    console.log(id)

    const token = localStorage.getItem("token") || ""

    if (targetTag != "de_active__btn") {
      if (targetTag === "card__like" || targetTag === "card__like-img") {
        evt.preventDefault()
        const response = await CardService.likeCard(id)
        console.log(response)
        if (response?.status === 200) {
          toast.success("Saqlanganlarga qo'shildi")
          return
        } else {
          const data = await CardService.unLikeCard(id)
          console.log(data)
          toast.success("Saqlanganlardan chiqarildi")
        }
        if (!token) {
          navigate("/login")
        }
      }
    }
  }

  return (
    <div className="container">
      <div style={{ paddingTop: "20px" }}>
        <h3 className="heart__title">{t("search.save")}</h3>
        <hr />
        <h3 className="heart__desc mb-2">
          {activeCard?.data?.totalCount} {t("search.count")}
        </h3>{" "}
        <ul className="card-list pt-3">
          {activeCard.isLoading ? (
            mockData.map((moc) => <CardSkeleton key={moc} />)
          ) : newData?.length ? (
            newData.map((item) => (
              <>
                <Link
                  key={item?.announcement_id}
                  id={item?.announcement_id}
                  to={`/announcement/${item?.slug}`}
                  onClick={handleClick}
                  className="card"
                >
                  <img
                    className="card__img mb-3"
                    src={BASE_URL + item?.thumb[0]}
                    height={222}
                  />
                  <div className="card__wrap">
                    <div className="card__inner">
                      <span className="card__city">{item.city}</span>
                      <div className="card__right">
                        <span className="card__view me-2">
                          {item.viewCount}
                        </span>
                        <button
                          id={item?.announcement_id}
                          className="card__like"
                        >
                          <img
                            id={item?.announcement_id}
                            className="card__like-img"
                            src={CardULikeIcon}
                            width={17}
                            height={16}
                            alt="Card like button image"
                          />
                        </button>
                        <span
                          className="me-1"
                          style={{
                            fontSize: "12px",
                            color: "#666666",
                            lineHeight: "14px",
                          }}
                        >
                          {" "}
                          {item?.likeCount}
                        </span>
                      </div>
                    </div>
                    <h3 className="card__body">
                      {item.description?.substring(0, 60)}...
                    </h3>

                    <p className="m-0 mt-4">
                      {item?.district},{" "}
                      {item?.createdAt.toString().slice(0, 10)}
                    </p>
                    <p className="de_card__price">
                      {item.price
                        .toString()
                        .replace(
                          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
                          "$1 "
                        )}{" "}
                      {item.price_type == "sum" ? "so'm" : "$"}
                    </p>
                  </div>
                </Link>
              </>
            ))
          ) : (
            <div className="py-5 d-flex flex-column align-items-center">
              <p>
                <Link
                  className="heart__desc-link"
                  to={"/"}
                >
                  {t("search.empty1")}{" "}
                </Link>
                <span className=" heart__desc">{t("search.empty2")} </span>{" "}
              </p>
            </div>
          )}
          {/* {activeCard?.data?.totalCount != 0 ?  <MoreBtn/> : ""} */}
        </ul>
      </div>
    </div>
  )
}

export default AnnounSearch
