import "./card.scss";
import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/Api/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardService from "../../Api/card.service";

export const Card = (card) => {
  const customPrice = card.card?.price
    .toString()
    .replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1 ");
  const navigate = useNavigate();
  const [likeImgSrc, setLikeImgSrc] = useState(CardULikeIcon);
  const handleClick = async (evt) => {
    const targetTag = evt.target.className;
    const token = localStorage.getItem("token") || "";

    if (!token) {
      navigate("/register");
    }    

    if (targetTag === "card__like" || targetTag === "card__like-img") {
      const response = await CardService.likeCard(card?.card?.announcement_id);
      console.log(response);
      if (response?.status === 200) {
        setLikeImgSrc(CardLikeIcon);
        toast.success("Saqlanganlarga qo'shildi");
        return;
      } else {
        const data = await CardService.unLikeCard(card?.card?.announcement_id);
        console.log(data);
        toast.success("Saqlanganlardan chiqarildi");
        setLikeImgSrc(CardULikeIcon);
      }
    } else {
      window.scroll(0, 0);
      navigate(`/announcement/${card.card?.slug}`);
    }
  };
  return (
    <>
      <li onClick={handleClick} className="card">
        <img
          className="card__img"
          src={BASE_URL + card.card?.thumb[0]}
          // height={190}
          alt={card.card.district}
        />
        <div className="card__wrap">
          <div className="card__inner">
            <span className="card__city">
              {card.card.city ? card.card.city : "Kiritilmagan"}
            </span>
            <div className="card__right">
              <span className="card__view me-2">{card.card?.viewCount}</span>
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
            {card.card?.description?.substring(0, 45)}...
          </h3>
          <p className="card__price">
            {customPrice} {card.card?.price_type === "dollar" ? "$" : "s'om"}
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
  );
};
