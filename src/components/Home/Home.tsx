import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Products } from "../Products/Products";
import "./home.css";

type ProductList = {
  list: string;
};

export const Home = () => {
  const [prodList, setProdList] = useState([]);
  const location = useLocation();
  const currentPath = location.pathname;

  // const setProductList = (val: ProductList) => {
  //   setProdList(val);
  // };

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="content-container">
          {" "}
          {currentPath === "/" ? <div>Home</div> : <Products />}
        </div>
      </div>
    </>
  );
};
