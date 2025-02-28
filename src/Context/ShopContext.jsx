import React, { createContext, useState } from "react";
import all_products from '../Componants/Assets/all_product'
export const ShopContext = createContext(null);
  

const getDefaultCart = ()=> {
        let cart={};
        for(let i = 0 ; i<all_products.length+1;i++){
            cart[i]=0;
        }
        return cart;
    }
const ShopContextProvider =(props) =>{

    const [cartItems , setCartItems] =useState(getDefaultCart());
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removefromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const clearCart = () => {
        setCartItems({});
      };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {
        all_products,
        cartItems,
        addToCart,
        removefromCart,
        getTotalCartItems,
         clearCart 
    };
   
   
   
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider