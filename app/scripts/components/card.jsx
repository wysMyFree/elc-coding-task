import React from 'react'

export const Card = ({ item }) => {
  return (
    <div className='card'>
      <h3 className='header'>{item.name}</h3>
      <div className='card horizontal'>
        <div className='card-image'>
          <img src={process.env.PUBLIC_URL + `${item.picture}`} />
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <p>{item.about}</p>
          </div>
          <div className='card-action'>
            <a href='#'>This is a link</a>
          </div>
        </div>
      </div>
    </div>
  )
}
