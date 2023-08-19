/* eslint-disable no-unused-vars */

import React from "react"
// import "./HomeCard.scss";
import { useTranslation } from "react-i18next"

import CardList from "@components/CardList/CardList"
const HomeCards = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="home__card-inner">
        <div className="container">
          <h2 className="home__card-title">{t("homecard.title")}</h2>
          <CardList page={1} />
        </div>
      </div>
    </>
  )
}

export default HomeCards
