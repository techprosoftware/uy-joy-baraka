/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./AnnounSearch.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import noData from "@images/no-data.svg";
import AnnounService from "../../Api/announ.service";
import cardService from "@/Api/card.service.jsx";
import { CardSkeleton } from "@components/Cards/CardSkeleton";
import { BASE_URL } from "@/Api/api";
import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
import { BackButton } from "../../components/BackButton/BackButton";
import SearchService from "../../Api/search.service";
import { useSelector } from "react-redux";
import { MoreBtn } from "../../components/MoreBtn/MoreBtn";
import { useTranslation } from "react-i18next";

export const AnnounSearch = () => {

  const { t } = useTranslation();


  const cityName = localStorage.getItem("searchCity");
  const city = localStorage.getItem('city')
  const type = localStorage.getItem('type')
  const price_type = localStorage.getItem('price_type')

  console.log(cityName);

  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  });

  const getSearchCard = async () => {
    const data = await SearchService.searchOnInput(cityName, city, type, price_type);
    // console.log(data);
    try {
      if (data?.status === 200) {
        setActiveCard({
          isLoading: false,
          data: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      
    }

  };

  useEffect(() => {
    getSearchCard();
  }, []);
  
  const [likeImgSrc, setLikeImgSrc] = useState(CardULikeIcon);

  console.log(activeCard);
  const newData = activeCard?.data?.posts;

  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const navigate = useNavigate();
  const handleClick = async (evt) => {
    const slug = evt.target.name;
    const id = evt.target.id;
    const targetTag = evt.target.className;

    const token = localStorage.getItem("token") || "";

    if (!token) {
      navigate("/register");
    }

    if (targetTag != "de_active__btn") {
      if (targetTag === "card__like" || targetTag === "card__like-img") {
        const response = await cardService.likeCard(id);
        console.log("like: ", response);
      } else {
        window.scroll(0, 0);
        navigate(`/announcement/${slug}`);
      }
    }
  };

  return (
    <div className="container">
      <div style={{ paddingTop: "90px" }}>
        <h3 className="heart__title">{t("search.save")}</h3>
        <hr />
        <h3 className="heart__desc mb-2">
          {
          activeCard?.data?.totalCount} {t("search.count")}
        </h3>{" "}
        <ul className="card-list pt-3">
          {activeCard.isLoading ? (
            mockData.map((moc) => <CardSkeleton key={moc} />)
          ) : 
          newData?.length ? (
            newData.map((item) => (
              <>
                <li onClick={handleClick} className="card">
        <img
          className="card__img"
          src={BASE_URL + item.card?.thumb[0]}
          // height={190}
          alt={item.card?.district}
        />
        <div className="card__wrap">
          <div className="card__inner">
            <span className="card__city">
              {item.card?.city ? item.card?.city : "Kiritilmagan"}
            </span>
            <div className="card__right">
              <span className="card__view me-2">{item.card?.viewCount}</span>
              <button className="card__like">
                <img
                  className="card__like-img"
                  src={likeImgSrc}
                  width={17}
                  height={16}
                  alt="Card like button image"
                />
              </button>
            </div>
          </div>
          <h3 className="card__body">
            {item.card?.description?.substring(0, 45)}...
          </h3>
          <p className="card__price mt-3">
            {item.price
                        .toString()
                        .replace(
                          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
                          "$1 "
                        )} {item.card?.price_type === "dollar" ? "$" : "s'om"}
          </p>
        </div>
        <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </li>
              </>
            ))
          ) : (
            <div className="py-5 d-flex flex-column align-items-center">
              <p>
                <Link className="heart__desc-link" to={"/"}>
                  {t("search.empty1")}{" "}
                </Link>
                <span className=" heart__desc">
                {t("search.empty2")}                </span>{" "}
              </p>
            </div>
          ) }
         {/* {activeCard?.data?.totalCount != 0 ?  <MoreBtn/> : ""} */}
        </ul>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};
