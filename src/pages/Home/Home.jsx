/* eslint-disable no-unused-vars */
import React from "react"
import { HomeBanner } from "./HomeBanner/HomeBanner"
import { HomeCards } from "./HomeCards/HomeCards"
import { Ads } from "@components/Ads/Ads"
import { MoreBtn } from "@components/MoreBtn/MoreBtn"
import { Social } from "@components/Social/Social"

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCards />
      <Ads />
      <HomeCards />
      <div className="container">
        <Social />
      </div>
      <HomeCards />
      <MoreBtn />
    </>
  )
}
