import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h2>Shopping Cart Application</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};
