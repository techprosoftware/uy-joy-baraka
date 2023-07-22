/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCard} from "@/redux/card/cardAction.js";
import CardService from "@/Api/card.service.jsx";
import {Card} from "../Cards/Cards";
import {CardSkeleton} from "@components/Cards/CardSkeleton";
import "./card-list.scss";

export const CardList = ({page, count, end}) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);
  // const cardSelector = useSelector((state) => state.cards.card);
  async function fetchCardData() {
    try {
      const response = await CardService.getByPage(page);
      if (response.status === 200) {
        setIsLoading(false);
        const data = response.data.posts;
        setData(data);
        // dispatch(setCard(data));
      }
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  }

  useEffect(() => {
    // if (cardSelector.length) {
    //   setIsLoading(false);
    //   setData(cardSelector)
    // } else {
    // fetchCardData();
    // }
      fetchCardData();

  }, [data]);

  return (
    <ul className="card-list">
      {isLoading
        ? mockData.slice(0, count).map((moc) => <CardSkeleton key={moc}/>)
        : end ? data?.slice(5, count + count)?.map((card) => (
          <Card key={card.announcement_id} card={card}/>
        )) : data?.slice(0, count)?.map((card) => (
          <Card key={card.announcement_id} card={card}/>
        ))}
    </ul>
  );
};

// export default CardList;
