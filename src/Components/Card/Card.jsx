import React from 'react'
import './Card.css'

const Card = ({logo,heading,detail}) => {
  return (
    <div className="card">
        <img  className="img" src={logo} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href='https://www.realmadrid.com/en/about-real-madrid/honours/football'><div className="b-button">Hello</div></a>
    </div>
  )
}

export default Card