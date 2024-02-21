import React from 'react'
import '../index.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-ig-container'>
      <img src={props.ig} alt="" className='card-ig'/>
      </div>
      <div className='card-text-container'>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      <button>Submit</button>
      </div>
    </div>
  )
}

export default Card;
