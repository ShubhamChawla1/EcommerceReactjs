import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = (product) => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, deleteFromCart } = useContext(ShopContext);
  
   // Import AddToCart Function using ContextAPI from ShopContext.jsx
      const { addToCart} = useContext(ShopContext); // Now we have addToCart function in this function we will pass the productId First link this function to AddToCart button
    
      // quantity of this product in cart
    // const productQuantity = cartItems[product.id] || 0;
  // check if cart is empty
  const hasItems = all_product.some((e) => cartItems?.[e.id] > 0);

  return (
    <div className="cartitems">
      {hasItems ? (
        <>
          {/* ✅ Show header only when cart has items */}
          <div className="cartitems-format-main ">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />

          {all_product.map((e) => {
            if (cartItems?.[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    {/* ✅ Conditional Rendering */}
         
          <div className="quantity-controls">
            <button onClick={() => removeFromCart(e.id)}>-</button>
            <button><span>{cartItems[e.id]}</span></button>
            <button onClick={() => addToCart(e.id)}>+</button>
          </div>
        
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img
                      className="cartitems-remove-icon"
                      src={remove_icon}
                      onClick={() => deleteFromCart(e.id)}
                      alt="remove"
                    />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}

          {/* ✅ Totals Section */}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        // ✅ Empty cart message
        <p className="cart-empty"> No Item in Cart <br/> 🛒 Add a product in cart</p>
      )}
    </div>
  );
};

export default CartItems;
