import React, { createContext, useEffect, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null); // We Create one Context initialize with null. This Context is saved in ShopContext that we are exporting.

// Create one empty cart and in ShopContextProvider we will create one useState Variable

    // const getDefaultCart = ()=> {
    //     let cart = {};
    //     for (let index = 0; index < all_product.length+1; index++) {
    //         cart[index] = 0;  // product id is 0
    //     }
    //     return cart;
    // }

    const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};



// Create ShopContext Provider
const ShopContextProvider = (props) => {
   
    
     //const [cartItems, setCartItems] = useState(getDefaultCart());     // Here we got one empty cart it's size will be allproduct.length Now we pass this variable (cartItems) through over props 
     // Using the Context we can access the cartItems data in any components
   
     // above const[cartItems] line is without localStorage
   
     // ✅ Load from localStorage if exists, otherwise return empty cart
  const getInitialCart = () => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  };

  const [cartItems, setCartItems] = useState(getInitialCart);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
    
     
   console.log(cartItems);  // In console -> key represent productId value represent the number of item added for the particular productId

    // 🔹 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


   // Create Add to Cart Functionality
  //  const addToCart = (itemId) => {
  //   setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1})) // :prev[itemId] this will be provided the value of that key
  //   console.log(cartItems);
  //  }

  const addToCart = (itemId) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1,
  }));
};

   // update Cart Count
   const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      totalAmount += itemInfo.new_price * cartItems[item];
    }
  }
  return totalAmount;
};

 // update the cart icon value in Navbar.  and pass this function (getTotalCartItems) in context below hai code Now we can access this function in Navbar
const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems){
        if(cartItems[item]>0)
        {
            totalItem += cartItems[item];
        }
    }
    return totalItem;
}

   // Create Remove Cart Functionality
    
   const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1})) // :prev[itemId] this will be provided the value of that key
   }
   
     // Create Delete Product Functionality (remove completely)
    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
    const updatedCart = { ...prev };
    delete updatedCart[itemId];   // remove product key completely
    return updatedCart;
    });
};

   const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,deleteFromCart}; // Create contextValue Variable {} here we will insert any data  and function that will be provided in the ShopContextProvider as a value using that we access this function and value in any components. From here we are getting all product data using context we will use it in different Components 

    // Now we will return this ShopContextValue through ShopContextProvider Here we have return
   
  
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;