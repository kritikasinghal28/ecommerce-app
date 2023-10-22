import { Link } from "react-router-dom";
import "./header.css";
import { Search } from "../Search/Search";
import ShopIcon from "../../assests/shop.svg";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={ShopIcon} alt="shop" className="shop-icon"></img>
        <h1>Shoppify</h1>
      </div>
      <Search /> 
      <div className="list-container">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/products">
          <h3>Products</h3>
        </Link>
      </div>
    </div>
  );
};
