/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCard } from "@/redux/card/cardAction.js"
import CardService from "@/Api/card.service.jsx"
import { Card } from "../Cards/Cards"

import { CardSkeleton } from "@components/Cards/CardSkeleton"
// import "./card-list.scss"

const CardList = ({ page }) => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [data, setData] = useState([])

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

  return (
    <ul className="card-list">
      {isLoading
        ? mockData.map((moc) => <CardSkeleton key={moc} />)
        : data?.map((card) => (
            <Card
              key={card.announcement_id}
              card={card}
            />
          ))}
    </ul>
  )
}

export default React.memo(CardList)
