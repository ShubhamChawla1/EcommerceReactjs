import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
    {/*<img src={props.image} alt=""/> before breadcrum*/}
    {/* Wrap the image tag using link and in this link we have provided the productId using that we can navigate to the productId(props.id) */}
    <Link to={`/product/${props.id}`}><img src={props.image} alt=""/></Link>

        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>


    </div>
  )
}

export default Item