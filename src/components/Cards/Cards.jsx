// import React from 'react'
import "./card.scss"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"
import {useNavigate} from "react-router-dom"
import {BASE_URL} from "@/Api/api";
import cardService from "@/Api/card.service.jsx";

export const Card = (card) => {
  const customPrice = card.card?.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ');
  const navigate = useNavigate()
  const handleClick = async (evt) => {
    const targetTag = evt.target.className
    const token = localStorage.getItem('token') || ""
    
  if (!token) {
      navigate('/register')
    }

    if (targetTag === 'card__like' || targetTag === 'card__like-img') {
      const response = await cardService.likeCard(card?.card?.announcement_id)
      console.log('like: ', response)
    } else {
      window.scroll(0, 0)
      navigate(`/announcement/${card.card?.slug}`)
    }
  }
  return <>
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
            <span className="me-1" style={{fontSize: "12px", color: "#666666", lineHeight: "14px"}}> {card.card?.likeCount}</span>
          </div>
        </div>
        <h3 className="card__body">{card.card?.description?.substring(0, 45)}...</h3>
        <p className="card__price">{customPrice} {card.card?.price_type === "dollar" ? "$" : "s'om"}</p>
      </div>
    </li>
  </>
}

