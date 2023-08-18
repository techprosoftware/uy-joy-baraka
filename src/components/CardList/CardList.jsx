/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { setCard } from "@/redux/card/cardAction.js"
import CardService from "@/Api/card.service.jsx"
import { Card } from "../Cards/Cards"

import { CardSkeleton } from "@components/Cards/CardSkeleton"
import { setLikedCard } from "../../redux/liked/likedAction"
// import "./card-list.scss"

const CardList = ({ page }) => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [data, setData] = useState([])
  const likedCardList = useSelector((state) => state.liked.liked)

  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = await CardService.getByPage(page)
        console.log(response)
        if (response.status === 200) {
          setIsLoading(false)
          const data = response.data.posts
          setData(data)
        }
      } catch (error) {
        console.error("Error fetching card data:", error)
      }
    }

    fetchCardData()
  }, [])

  console.log(likedCardList)

  return (
    <ul className="card-list">
      {isLoading
        ? mockData.map((moc) => <CardSkeleton key={moc} />)
        : data?.map((card) => {
            const foundedCard = likedCardList.includes(card.slug)
            const handleLiked = () => {
              if (foundedCard) {
                const index = likedCardList.indexOf(card.slug)
                const newCards = likedCardList.slice(index, 1)
                dispatch(setLikedCard(newCards))
              } else {
                dispatch(setLikedCard([...likedCardList, card.slug]))
                card.isLiked = true
              }
            }

            if (foundedCard) {
              card.isLiked = true
            }

            return (
              <Card
                key={card.announcement_id}
                card={card}
                handleLiked={handleLiked}
              />
            )
          })}
    </ul>
  )
}

export default React.memo(CardList)
