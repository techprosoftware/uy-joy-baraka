/* eslint-disable no-unused-vars */
import React from 'react'
import './Upload.scss'
import arrow from '../../../public/assets/images/left-arrow.svg'
import { Link } from 'react-router-dom'
import plus from '../../../public/assets/images/plus-upload.svg'

export const Upload = () => {
  return (
    <div className='upload__inner'>
        <div className="container">
            <Link to='/' className='arrow__btn'><img src={arrow} alt="" /> Orqaga</Link>
            <h2 className='upload__title'>E’lon joylash</h2>

            <form className='upload__form'>
            <p>Uy rasmini yuklang:</p>
            <label className='upload__img' htmlFor="upload"><img src={plus} alt="" /> Rasm yuklang</label>
                <input type="file"  id='upload' visibility='hidden' />
            </form>
        </div>
    </div>
  )
}
