import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null); // We Create one Context initialize with null. This Context is saved in ShopContext that we are exporting.

// Create ShopContext Provider
const ShopContextProvider = (props) => {

    const contextValue = {all_product}; // Create contextValue Variable {} here we will insert any data  and function that will be provided in the ShopContextProvider as a value using that we access this function and value in any components. From here we are getting all product data using context we will use it in different Components 
    

    // Now we will return this ShopContextValue through ShopContextProvider Here we have return
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;