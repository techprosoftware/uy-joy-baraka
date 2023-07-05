/* eslint-disable no-unused-vars */
import React from "react"
import { HomeBanner } from "./HomeBanner/HomeBanner"
import { HomeCards } from "./HomeCards/HomeCards"
import { Ads } from "@components/Ads/Ads"
import { MoreBtn } from "@components/MoreBtn/MoreBtn"
export const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCards />
      <Ads />
      <HomeCards />
      <MoreBtn />
    </>
  )
}
