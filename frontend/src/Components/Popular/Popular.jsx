import React from 'react'
import './Popular.css'
import data_product from '../Assets/data.js'
import Item from '../Items/Item.jsx'



const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {/* Render their item component using data_product */}
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
               

            })}
             {/*return the Item component pass the props pass the key i. i is for index. pass the id, name , image, new_price, old_price Now we have provide all the props now we will mount the popular component in our shop page*/}
        </div>
    </div>
  )
}

export default Popular