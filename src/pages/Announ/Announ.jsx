/* eslint-disable no-unused-vars */
import React from 'react'
import './Announ.scss'
import {BackButton} from '@components/BackButton/BackButton'

export const Announ = () => {
  return (
    <div className='announ__inner'>
      <div className="container">
        <BackButton/>
          <h2 className='announ__title'>E’lonlarim</h2>
      </div>
    </div>
  )
}
