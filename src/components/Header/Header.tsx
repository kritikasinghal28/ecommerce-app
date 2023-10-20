import { Link } from "react-router-dom";
import "./header.css";
import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <div className="header-container">
      <h1>Shoppify</h1>
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
