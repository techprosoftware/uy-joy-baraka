// import React from 'react'
import "./card.scss"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"
import { motion } from "framer-motion"

export const Card = (card) => {
  const customPrice = card.card?.price
    .toLocaleString()
    .replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1 ")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
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
          <p className="card__price">
            {customPrice} {"s'om"}
          </p>
        </div>
      </li>
    </motion.div>
  )
}
