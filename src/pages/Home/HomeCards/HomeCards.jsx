/* eslint-disable no-unused-vars */
import React from 'react'
import './HomeCard.scss'
import { CardList } from '@components/CardList/CardList'

export const HomeCards = () => {

  return (
    <>
    <div className="home__card__inner">
      <div className="container">
        <CardList/>
      </div>
    </div>
    </>
  )
}
