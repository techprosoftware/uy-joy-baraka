/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.scss'
import FooterPhone from '@images/footer-phone.png'
import StoreApple from '@images/store-apple.png'
import StoreGoogle from '@images/store-google.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__top">
        <div className="container">
          <div className="footer__top-inner">
            <img className='footer__bg-img' src={FooterPhone} width={219} height={337} alt="Footer smartphone design" />
            <div className="footer__text">
              <h2>Har doim xabardor bo’ling Uy-joy barakailovasini yuklab oling</h2>
              </div>
            <div className='stores'>
              <button className='stores__btn'>
                <img src={StoreApple} width={193} height={64} alt="Apple store image" />
              </button>
              <button className='stores__btn'>
                <img src={StoreGoogle} width={193} height={64} alt="Google play market image" />
              </button>
              <div className="stores__shadow"></div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          
        </div>
      </div>
    </div>
  )
}
