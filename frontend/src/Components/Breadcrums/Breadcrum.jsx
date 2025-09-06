import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

// Within this Component we use props using this props we get the product.
// product data will be used in breadcrum

// Now Mount this breadcrum component in our Product.jsx page 
// Now link this product page with the product For that Item.jsx -> link the Item image with the product
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=""/> {product.name}
    </div>
  )
}

export default Breadcrum