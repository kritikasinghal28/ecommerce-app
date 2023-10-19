import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Products } from "../Products/Products";
import "./home.css";

export const Home = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
