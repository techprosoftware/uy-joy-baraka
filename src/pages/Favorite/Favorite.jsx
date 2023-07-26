/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./Favorite.scss";
import { useEffect, useRef, useState } from "react";
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
import CardService from "../../Api/card.service";

export const Favorite = () => {
  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  });

  const getSearchCard = async () => {
    const data = await CardService.getLike();
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
  // console.log(activeCard);
  const newData = activeCard?.data?.posts;
  // console.log(newData?.forEach(item => console.log(item?.announcement)));
  const mappedData = newData?.map((item) => ({
    likeId: item.like_id,

    userId: item.user_id,

    announcementId: item.announcement_id,

    date: item.date,

    createdAt: item.createdAt,

    updatedAt: item.updatedAt,

    announcement: {
      address: item["announcement.address"],

      city: item["announcement.city"],

      district: item["announcement.district"],

      type: item["announcement.type"],

      description: item["announcement.description"],

      price: item["announcement.price"],

      priceType: item["announcement.price_type"],
      phone: item["announcement.phone"],

      status: item["announcement.status"],

      confirm: item["announcement.confirm"],

      likeCount: item["announcement.likeCount"],
      viewCount: item["announcement.viewCount"],
      rec: item["announcement.rec"],
      fullName: item["announcement.full_name"],

      avatar: item["announcement.avatar"],

      thumb: item["announcement.thumb"],

      title: item["announcement.title"],

      user_id: item["announcement.user_id"],
      createdAt: item["announcement.createdAt"],

      updatedAt: item["announcement.updatedAt"],
    },
  }));


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
        <h3 className="heart__title">Saqlanganlar</h3>
        <hr />
        <h3 className="heart__desc mb-2">
          {activeCard?.data?.totalCount} ta e'lon topildi
        </h3>{" "}
        <ul className="card-list pt-3">
          {activeCard.isLoading ? (
            mockData.map((moc) => <CardSkeleton key={moc} />)
          ) : mappedData?.length ? (
            mappedData?.map((item) => (
              <>
                <li
                  name={item?.announcement?.slug}
                  id={item?.announcement?.announcement_id}
                  onClick={handleClick}
                  className="card"
                >
                  <img
                    name={item?.announcement?.slug}
                    id={item?.announcement?.announcement_id}
                    className="card__img"
                    src={BASE_URL + item.announcement?.thumb[0]}
                    height={222}
                  />
                  <div
                    name={item?.announcement?.slug}
                    id={item?.announcement?.announcement_id}
                    className="card__wrap"
                  >
                    <div
                      name={item?.announcement?.slug}
                      id={item?.announcement?.announcement_id}
                      className="card__inner"
                    >
                      <span
                        name={item?.announcement?.slug}
                        id={item?.announcement?.announcement_id}
                        className="card__city"
                      >
                        {item.announcement?.city}
                      </span>
                      <div
                        name={item?.announcement?.slug}
                        id={item?.announcement?.announcement_id}
                        className="card__right"
                      >
                        <span
                          name={item?.announcement?.slug}
                          id={item?.announcement?.announcement_id}
                          className="card__view me-2"
                        >
                          {item.announcement?.viewCount}
                        </span>
                        <button
                          name={item?.announcement?.slug}
                          id={item?.announcement?.announcement_id}
                          className="card__like"
                        >
                          <img
                            className="card__like-img"
                            src={
                              item.announcement?.likeCount
                                ? CardLikeIcon
                                : CardULikeIcon
                            }
                            width={17}
                            height={16}
                            alt="Card like button image"
                          />
                        </button>
                        <span
                          name={item?.announcement?.slug}
                          id={item?.announcement?.announcement_id}
                          className="me-1"
                          style={{
                            fontSize: "12px",
                            color: "#666666",
                            lineHeight: "14px",
                          }}
                        >
                          {" "}
                          {item.announcement?.likeCount}
                        </span>
                      </div>
                    </div>
                    <h3
                      name={item?.announcement?.slug}
                      id={item?.announcement?.announcement_id}
                      className="card__body"
                    >
                      {item.announcement?.description}
                    </h3>

                    <p
                      name={item?.announcement?.slug}
                      id={item?.announcement?.announcement_id}
                      className="de_card__price"
                    >
                      {item.announcement?.price
                        .toString()
                        .replace(
                          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
                          "$1 "
                        )}{" "}
                      {item.announcement?.price_type == "sum" ? "so'm" : "$"}
                    </p>
                  </div>
                </li>
              </>
            ))
          ) : (
            <div className="py-5 d-flex flex-column align-items-center">
              <p>
                <span className=" heart__desc">
                  Hozircha yoqtirgan e'lonlaringiz mavjud emas!
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
