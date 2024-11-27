
import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import  { CartList, WishList } from "../Provider/ContextProvider";


const CardDetail = () => {
   const{addToCart}= useContext(CartList);
   const{wishList,addToWishList} = useContext(WishList);
 
    const{product_id} =useParams();
    const id = Number(product_id);
    const data =useLoaderData();
    const product = data.find(card => card.product_id === id); 
    if (!product) {
      return <div>Product not found</div>;
  }
    console.log(product);
   const{product_title,product_image,description,specifications,rating} =product;
  const handleToCart=()=>{
    addToCart(product)
  }
  const [isWishList, setIsWishList] = useState(wishList.some(item => item.product_id === product.product_id));
  const handleToWish=()=>{
    if(!isWishList){
addToWishList(product);
setIsWishList(true)
    }

  }
  
    return (
        <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto mt-8 mb-4">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            alt={product_title}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-6">
             {description}
            </p>
            <p>{specifications}</p>
            <p>{rating}</p>
            <div className="flex gap-6">
            <button onClick={handleToCart}   className="btn btn-primary">Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
            <button onClick={handleToWish}  className="btn btn-primary"><i className="fa-regular fa-heart"></i></button>
            </div>
      
          </div>
        </div>
      </div>
    );
};

export default CardDetail;