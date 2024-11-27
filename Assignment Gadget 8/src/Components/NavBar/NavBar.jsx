import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartList, WishList } from "../Provider/ContextProvider";

const NavBar = () => {
  const { cart } = useContext(CartList);
  const { wishList } = useContext(WishList);
  return (
    <div className="navbar bg-[#9538E2] text-white  w-11/12 mx-auto">
      <div className="navbar-start">
        <Link to="/" className="text-xl">
          GadgetHeaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {cart.length > 0 && (
          <button className="btn rounded-full">
            <i className="fa-solid fa-cart-shopping"></i>
            {cart.length}
          </button>
        )}
        {wishList.length > 0 && (
          <button className="btn rounded-full">
            <i className="fa-regular fa-heart"></i>
            {wishList.length}
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
