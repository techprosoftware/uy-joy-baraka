/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { HomeBanner } from "./HomeBanner/HomeBanner";
import { HomeCards } from "./HomeCards/HomeCards";
import { Ads } from "@components/Ads/Ads";
import { Social } from "@components/Social/Social";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/redux/page/pageAction.js";
import  CardList  from "@components/CardList/CardList";
import { InfiniteScroll } from "@components/InfiniteScroll/InfiniteScroll"

export const Home = () => {
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(3));
  }, []);
//51b9fddd-96c9-41c8-97eb-c372b153569c
  return (
    <>
      <HomeBanner />
      <HomeCards />
      <Ads />
      <div className="container">
        <CardList page={2} />
      </div>
      <Social />
      <InfiniteScroll page={3} />
      {/* <MoreBtn /> */}
    </>
  );
};
