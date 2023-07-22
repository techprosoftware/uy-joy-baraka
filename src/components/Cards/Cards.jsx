// import React from 'react'
import "./card.scss"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"
import {useNavigate} from "react-router-dom"
import {BASE_URL} from "@/Api/api";

export const Card = (card, isLoading) => {
  const customPrice = card.card?.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ');
  const navigate = useNavigate()
  const handleClick = () => {
    window.scroll(0, 0)
    return navigate(`/announcement/${card.card?.slug}`)
  }

  return (
    <li
      onClick={handleClick}
      className="card">
      <img
        className="card__img"
        src={BASE_URL + card.card?.thumb[0]}
        height={222}
        alt={card.card.district}/>
      <div className="card__wrap">
        <div className="card__inner">
          <span className="card__city">{card.card?.city}</span>
          <div className="card__right">
            <span className="card__view me-2">{card.card?.viewCount}</span>
            <button className="card__like">
              <img
                className="card__like-img"
                src={card.card?.likeCount ? CardLikeIcon : CardULikeIcon}
                width={17}
                height={16}
                alt="Card like button image"
              />
            </button>
          </div>
        </div>
        <h3 className="card__body">{card.card?.body}</h3>
        <p className="card__price">{customPrice} {card.card?.price_type === "dollar" ? "$" : "s'om"}</p>
      </div>
    </li>
  )
}
