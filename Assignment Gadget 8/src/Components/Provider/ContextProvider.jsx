import React, {  createContext, useEffect, useState } from 'react';

export const CartList = createContext();
export const WishList = createContext();

const ContextProvider = ({children}) => {
    const[cart,setCart] = useState(()=>JSON.parse(localStorage.getItem('cart')) || []);
    const[wishList,setWishList] = useState(()=>JSON.parse(localStorage.getItem('wishlist')) || []);
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart]);
    useEffect(()=>{
        localStorage.setItem('wishlist', JSON.stringify(wishList))
    },[wishList]);
    const addToCart =(item)=>{
        setCart([...cart,item])
    }
    const addToWishList =(item)=>{
        setWishList([...wishList,item])
    }
    return (
     <CartList.Provider value={{cart,addToCart}}>
        <WishList.Provider value={{wishList,addToWishList}}>
{children}
        </WishList.Provider>

     </CartList.Provider>
    );
};

export default ContextProvider;