import { useContext, useState } from "react";
import { CartList, WishList } from "../Provider/ContextProvider";

const Dashboard = () => {
  const { cart } = useContext(CartList);
  const { wishList } = useContext(WishList);
  const [activeTab, setActiveTab] = useState("cart");
  const [sortCart, setSortCart] = useState(cart);

  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setSortCart(sorted);
  };
  const totalPrice = sortCart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div className=" mt-4 mb-5  w-11/12 mx-auto text-center space-x-8">
      <button
        onClick={() => {
          setActiveTab("cart");
        }}
        className={`btn ${activeTab === "cart" ? "btn-success" : "btn-primary"}`}
      >
        Cart <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <button
        onClick={() => {
          setActiveTab("wishList");
        }}
        className={`btn ${
          activeTab === "wishList" ? "btn-info" : "btn-primary"
        }`}
      >
        Wishlist <i class="fa-regular fa-heart"></i>
      </button>
      </div>
      <div>
      {activeTab === "cart" ? (
        <div className="w-11/12 mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <button
            className="btn btn-outline btn-secondary mb-4"
            onClick={handleSort}
          >
            Sort by Price
          </button>

          {sortCart.length > 0 ? (
            <div>
              {sortCart.map((item) => (
                <div
                  key={item.product_id}
                  className="flex gap-4 mb-4 p-4 border rounded-lg"
                >
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{item.product_title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No items</p>
          )}

          <div className="mt-4">
            <h3 className="font-semibold"> Price: ${totalPrice}</h3>
          </div>
        </div>
      ) : (
        <div className="w-full px-6">
          <h2 className="text-2xl font-bold mb-4">Wishlist</h2>

          {wishList.length > 0 ? (
            <div>
              {wishList.map((item) => (
                <div
                  key={item.product_id}
                  className="flex gap-4 mb-4 p-4 border rounded-lg"
                >
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{item.product_title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p> items are not in the wishlist.</p>
          )}
        </div>
      )}
      </div>
   
    </div>
  );
};

export default Dashboard;
