/* eslint-disable no-unused-vars */

import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import SiteLogo from '@images/logo.svg'

export const Header = () => {
  return (
    <div className='site-header'>
      <div className="container">
        <div className="site-haeder__inner">
          <Link to='/'><img src={SiteLogo} width={133} height={59} alt="Site logo" /></Link>
        </div>
        <nav>
          <ul>

          </ul>
        </nav>
      </div>
    </div>
  )
}