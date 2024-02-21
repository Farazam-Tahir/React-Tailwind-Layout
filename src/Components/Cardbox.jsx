import React from 'react';
import Card from './Card';
import image from '../images/card.jpeg';
import Data from './Data';

function addCard(val) {
    return(
        <Card ig = {val.ig} heading = {val.heading} text = {val.text}/>
    )
}
const Cardbox = () => {
  return (
    <div className='card-box'>
      {/* <Card ig = {data.ig} heading = {data.heading} text = {data.text}/>
      <Card ig = {data.ig} heading = {data.heading} text = {data.text}/>
      <Card ig = {data.ig} heading = {data.heading} text = {data.text}/>
      <Card ig = {data.ig} heading = {data.heading} text = {data.text}/>
      <Card ig = {data.ig} heading = {data.heading} text = {data.text}/>
      <Card ig = {data.ig} heading = {data.heading} text = {data.text}/> */}
      
      {/* OR WE CAN SIMPLY USE MAP() */}
      
      {Data.map(addCard)}

    </div>
  )
}

export default Cardbox;
