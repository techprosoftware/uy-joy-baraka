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

export const AnnounSearch = () => {
  const cityName = localStorage.getItem("searchCity");
  const city = localStorage.getItem('city')
  const type = localStorage.getItem('type')
  const price_type = localStorage.getItem('price_type')

  console.log(cityName);
  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  });

  // console.log(cityName);

  const getSearchCard = async () => {
    const data = await SearchService.searchOnInput(cityName, city, type, price_type);
    console.log(data);
    if (data?.status === 200) {
      setActiveCard({
        isLoading: false,
        data: data.data,
      });
    }
  };

  useEffect(() => {
    getSearchCard();
  }, []);

  const [count, setCount] = useState();

  const newData = activeCard?.data?.posts;

  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const handleChange = async (evt) => {
  //   let id = evt.target.id;
  //   console.log(evt.target.checked);

  //   try {
  //     const token = localStorage.getItem("token");
  //     const data = await AnnounService.setActiveCard(id, token);
  //     if (data.status === 200) {
  //       toast.success("E'lon faolsizlantirildi.");
  //     }
  //     getSearchCard();

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

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
        <h3 className="heart__title">Saralanganlar</h3>
        <hr />
        <h3 className="heart__desc mb-2">
          {newData?.length} ta e'lon topildi
        </h3>{" "}
        <ul className="card-list pt-3">
          {newData?.length ? (
            newData?.map((item) => (
              <>
                <li
                  name={item.slug}
                  id={item.announcement_id}
                  onClick={handleClick}
                  className="card"
                >
                  <img
                    name={item.slug}
                    id={item.announcement_id}
                    className="card__img"
                    src={BASE_URL + item?.thumb[0]}
                    height={222}
                  />
                  <div
                    name={item.slug}
                    id={item.announcement_id}
                    className="card__wrap"
                  >
                    <div
                      name={item.slug}
                      id={item.announcement_id}
                      className="card__inner"
                    >
                      <span
                        name={item.slug}
                        id={item.announcement_id}
                        className="card__city"
                      >
                        {item.city}
                      </span>
                      <div
                        name={item.slug}
                        id={item.announcement_id}
                        className="card__right"
                      >
                        <span
                          name={item.slug}
                          id={item.announcement_id}
                          className="card__view me-2"
                        >
                          {item.viewCount}
                        </span>
                        <button
                          name={item.slug}
                          id={item.announcement_id}
                          className="card__like"
                        >
                          <img
                            className="card__like-img"
                            src={item?.likeCount ? CardLikeIcon : CardULikeIcon}
                            width={17}
                            height={16}
                            alt="Card like button image"
                          />
                        </button>
                        <span
                          name={item.slug}
                          id={item.announcement_id}
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
                    <h3
                      name={item.slug}
                      id={item.announcement_id}
                      className="card__body"
                    >
                      {item.description}
                    </h3>

                    <p
                      name={item.slug}
                      id={item.announcement_id}
                      className="de_card__price"
                    >
                      {item.price
                        .toString()
                        .replace(
                          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
                          "$1 "
                        )}{" "}
                      {item.price_type == "sum" ? "so'm" : "$"}
                    </p>
                  </div>
                </li>
              </>
            ))
          ) : (
            <div className="py-5 d-flex flex-column align-items-center">
              <p>
                <Link className="heart__desc-link" to={"/"}>
                  Bu yerdan{" "}
                </Link>
                <span className=" heart__desc">
                  ko'proq e'lon topishingiz mumkin.
                </span>{" "}
              </p>
            </div>
          )}
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
