import React from 'react'
import './Breadcum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcums = (props) => {
    const{product}=props;
  return (
    <div className='breadcrum'>
    HOME  <img src={arrow_icon}></img>SHOP<img src={arrow_icon} alt=''></img>{product.category}<img src={arrow_icon} alt=''></img>{product.name}
    </div>
  )
}

export default Breadcums
