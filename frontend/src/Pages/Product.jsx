import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import {ShopContext} from '../Context/ShopContext'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
export const Product = () => {
  // Here we grab all Product data using Context
  // within useContext -> ShopContext
  // As we have did in App.js we have created Routes -> we have product and we have productId 
  // First we use productId. useParams to get the productId
  // using this productID we will find the product in all product data.
 
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId)) // productId is in string format, e.id is in number format we convert productId in number. Now we display the product in our page
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/> {/* using this props(product) we display our product image, title , prices*/}
      <DescriptionBox/>
    </div>
  )
}
