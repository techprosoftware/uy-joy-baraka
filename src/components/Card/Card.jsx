// import React from 'react'
import "./card.scss"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"

export const Card = (card) => {
  const { img, city, view, likes, body, price } = card.card
  const customPrice = price.toLocaleString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ');

  return (
    <div className="card">
      <img
        className="card__img"
        src={`${img}`}
        width={222}
        height={222}
        alt={body}
      />
      <div className="card__inner">
        <span className="card__city">{city}</span>
        <div className="card__right">
          <span className="card__view">{view}</span>
          <button className="card__like">
            <img
              className="card__like-img"
              src={likes ? CardLikeIcon : CardULikeIcon}
              width={17}
              height={16}
              alt="Card like button image"
            />
          </button>
        </div>
      </div>
      <h3 className="card__body">{body}</h3>
      <p className="card__price">{customPrice} {"s'om"}</p>
    </div>
  )
}
