import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <h1>Shopping Cart</h1>
      <div className="list-container">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};
