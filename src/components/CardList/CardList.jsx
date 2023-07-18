import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "@/redux/card/cardAction.js";
import CardService from "@/Api/card.service.jsx";
import { Card } from "../Cards/Cards";
import { CardSkeleton } from "@components/Cards/CardSkeleton";
import "./card-list.scss";

export const CardList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const cardSelector = useSelector((state) => state.cards.card);

  useEffect(() => {
    if (cardSelector.length) {
      setIsLoading(false);
      setData(cardSelector)
      return;
    }

    async function fetchCardData() {
      try {
        const response = await CardService.getAllCard();
        if (response.status === 200) {
          setIsLoading(false);
          const data = response.data.posts;
          setData(data);
          dispatch(setCard(data));
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
        setIsLoading(false);
      }
    }

    fetchCardData();
  }, [cardSelector, dispatch]);

  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);

  return (
    <ul className="card-list">
      {isLoading
        ? mockData.map((moc) => <CardSkeleton key={moc} />)
        : data.map((card) => (
          <Card key={card.announcement_id} card={card} isLoading={isLoading} />
        ))}
    </ul>
  );
};

// export default CardList;
