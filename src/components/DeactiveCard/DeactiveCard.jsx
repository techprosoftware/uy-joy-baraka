/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import "./DeactiveCard.scss";
// import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
// import mockCardImg from "@images/mock-img.png";
import deleteBtn from "@images/delete-btn.svg";
import noData from "@images/no-data.svg";
import AnnounService from "../../Api/announ.service";
import { CardSkeleton } from "@components/Cards/CardSkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "@/Api/api";
import cardService from "@/Api/card.service.jsx";
import { useTranslation } from "react-i18next";

export const DeactiveCard = () => {
  const { t, i18n } = useTranslation();

  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  });
  const getActives = async () => {
    const token = localStorage.getItem("token");

    const data = await AnnounService.getDeActiveCard(token);
    if (data.status == 200) {
      setActiveCard({
        isLoading: false,
        data: data?.data,
      });
    }
  };

  useEffect(() => {
    getActives();
  }, []);

  const newData = activeCard?.data?.posts;
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = async (evt) => {
    let id = evt.target.id;
    try {
      const token = localStorage.getItem("token");
      const data = await AnnounService.setActiveCard(id, token);
      if (data?.status === 200) {
        toast.success(`${t("announ.succannoun")}`);
      }else {
        localStorage.removeItem('token')
        navigate('/login')
      }
      getActives();
    } catch (error) {
      toast.warning(`${t("announ.checkadmin")}`);
    }
  };

  const handleDelete = async (evt) => {
    let id = evt.target.id;
    try {
      const token = localStorage.getItem("token");
      const data = await AnnounService.deleteCard(id, token);
      // console.log(data.status);
      if (data.status === 200) {
        toast.success(`${t("announ.deleteannoun")}`);
      }
      getActives();

    } catch (error) {
      throw new Error(error)
    }
  };

  const navigate = useNavigate();

  const handleClick = async (evt) => {
    const id = evt.target.id;
    const targetTag = evt.target.className;
    const token = localStorage.getItem("token") || "";

    if (!token) {
      navigate("/login");
    }

    if (targetTag == "active__btn" || targetTag == "delete__img") {
      evt.preventDefault();

      if (targetTag === "card__like" || targetTag === "card__like-img") {
        evt.preventDefault();
        const response = await cardService.likeCard(id);
      }
    }
  };

  return (
    <>
      <div>
        <ul className="card-list">
          {activeCard.isLoading ? (
            mockData.map((moc) => <CardSkeleton key={moc} />)
          ) : newData.length ? (
            newData?.map((item) => (
              <>
                <Link
                  key={item.announcement_id}
                  to={`/announcement/${item?.slug}`}
                  name={item.slug}
                  id={item.announcement_id}
                  onClick={handleClick}
                  className="card"
                >
                  <img
                    className="card__img mb-3"
                    src={BASE_URL + item?.thumb[0]}
                    height={222}
                  />
                  <img
                  id={item.announcement_id}
                    onClick={handleDelete}
                    className="delete__img"
                    src={deleteBtn}
                    alt=""
                  />

                  <div className="card__wrap">
                    <div className="card__inner">
                      <span className="card__city">{item.city}</span>
                      <div className="card__right">
                        <span className="card__view me-2">
                          {item.viewCount}
                        </span>
                      </div>
                    </div>
                    <h3 className="card__body">
                      {item.description?.substring(0, 60)}...
                    </h3>
                    <button
                      onClick={handleChange}
                      id={item.announcement_id}
                      className="active__btn"
                    >
                      {t("announ.activeannoun")}
                    </button>
                    <p className="m-0">
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
            <img className="img-fluid" width={500} src={noData} />
          )}
        </ul>
      </div>
    </>
  );
};
