import { Link } from "react-router-dom";



const Card = ({card}) => {
  const{product_id,product_image,product_title,price}= card;
    return (
        <div className="card bg-base-100  shadow-2xl px-6 mt-6 mb-6">
        <figure className="rounded-lg p-8 bg-gray-200">
          <img
            src={product_image}
            alt="product_image"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title">{product_title}</h2>
          <p>{price}</p>
          <div className="card-actions">
          <Link to={`/cards/${product_id}`}>  <button className="btn btn-outline border-[#9538E2] text-[#9538E2]">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Card;