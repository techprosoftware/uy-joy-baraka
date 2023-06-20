// import React from 'react'
import "./card.scss"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"

export const Card = (card) => {
  console.log(card.card?.img);
  const customPrice = card.card?.price.toLocaleString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ');

  return (
    <li className="card">
      <img
        className="card__img"
        src={`../../../public/assets/images${card.card?.img}`}
        height={222}
      />
     <div className="card__wrap">
     <div className="card__inner">
        <span className="card__city">{card.card?.city}</span>
        <div className="card__right">
          <span className="card__view me-2">{card.card?.view}</span>
          <button className="card__like">
            <img
              className="card__like-img"
              src={card.card?.likes ? CardLikeIcon : CardULikeIcon}
              width={17}
              height={16}
              alt="Card like button image"
            />
          </button>
        </div>
      </div>
      <h3 className="card__body">{card.card?.body}</h3>
      <p className="card__price">{customPrice} {"s'om"}</p>
     </div>
    </li>
  )
}
