// import "./card.scss"
import CardLikeIcon from "@images/card-like-icon.svg"
import CardULikeIcon from "@images/card-ulike-icon.svg"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "@/Api/api"
import { useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CardService from "../../Api/card.service"

export const Card = (card) => {
  const customPrice = card.card?.price
    .toString()
    .replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1 ")
  const navigate = useNavigate()
  // const [likeImgSrc, setLikeImgSrc] = useState(CardULikeIcon)
  const data = card.card?.createdAt.toString().slice(0, 10)
  const likedCardList = JSON.parse(localStorage.getItem("likedCardList")) || []

  const [like, setLike] = useState(false)

  const handleClick = async (evt) => {
    const targetTag = evt.target.className
    const token = localStorage.getItem("token") || ""

    if (targetTag === "card__like" || targetTag === "card__like-img") {
      if (!token) {
        navigate("/login")
      } else {
        setLike(!like)
        const response = await CardService.likeCard(card?.card?.announcement_id)
        if (response?.status === 200) {
          toast.success("Saqlanganlarga qo'shildi")
          return
        } else {
          const data = await CardService.unLikeCard(card?.card?.announcement_id)
          toast.success("Saqlanganlardan chiqarildi")
        }
      }
    } else {
      window.scroll(0, 0)
      navigate(`/announcement/${card.card?.slug}`)
    }
  }

  const handleLiked = () => {
    const index = likedCardList.findIndex(
      (item) => item.announcement_id === card.card.announcement_id
    )

    if (index !== -1) {
      card.card.isLiked = false
      likedCardList.splice(index, 1)
      localStorage.setItem("likedCardList", JSON.stringify(likedCardList))
    } else {
      localStorage.setItem(
        "likedCardList",
        JSON.stringify([...likedCardList, card.card])
      )
      card.card.isLiked = true
    }
  }

  return (
    <>
      <li
        onClick={handleClick}
        className="card"
      >
        <img
          className="card__img mb-3"
          src={BASE_URL + card.card?.thumb[0]}
          // height={190}
          alt={card.card?.district}
        />
        <div className="card__wrap">
          <div className="card__inner">
            <span className="card__city">
              {card.card?.city ? card.card?.city : "Kiritilmagan"}
            </span>
            <div className="card__right">
              <span className="card__view me-2">{card.card?.viewCount}</span>
              <button
                onClick={() => handleLiked()}
                className="card__like"
              >
                <img
                  className="card__like-img"
                  src={card.card?.isLiked ? CardLikeIcon : CardULikeIcon}
                  width={17}
                  height={16}
                  alt="Card like button image"
                />
              </button>
            </div>
          </div>
          <h3 className="card__body">
            {card.card?.description?.substring(0, 60)}...
          </h3>
          <p className="m-0 mt-4">
            {card.card?.district}, {data}
          </p>
          <p className="card__price">
            {customPrice} {card.card?.price_type === "dollar" ? "$" : "s'om"}
          </p>
        </div>
      </li>
    </>
  )
}
