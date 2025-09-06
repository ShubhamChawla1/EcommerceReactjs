import React, { useContext } from 'react'
import  './ProductDisplay.css'
// Here we create HTML Structure for our ProductDisplay Component
// use props for using product data

import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;

    // Import AddToCart Function using ContextAPI from ShopContext.jsx
    const {addToCart} = useContext(ShopContext); // Now we have addToCart function in this function we will pass the productId First link this function to AddToCart button
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className = 'productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis eius nesciunt aut, quis ratione sit adipisci doloribus quibusdam maiores natus iste hic dignissimos? Fuga quaerat soluta, eum at esse eius deleniti? Praesentium ratione repellat, commodi nobis fugit ipsa officiis eius tempora fugiat sint sequi, ullam a id quam veniam?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : <span>Women, T-Shirt, Crop-Top </span></span></p>
            <p className='productdisplay-right-category'><span>Tags : <span>Modern, Latest</span></span></p>
        </div>

    </div>
  )
}
