// import React from 'react'

export const Card = (img, city, likes, body, price) => {
  return (
    <div>
      <img src={img} width={222} height={222} alt={body} />
      <h3>{city}</h3>
      <span>{likes}</span>  
      <p>{price}</p>
    </div>
  )
}
