import React, { useState, useEffect } from "react";
import "./product.css";

const PRODUCT_API_URL = "https://dummyjson.com/products";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  image: string;
  quantity: number;
};

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (url: string) => {
    try {
      const dataResponse = await fetch(url);
      if (dataResponse.ok) {
        const data = await dataResponse.json();
        setProducts(data.products);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(PRODUCT_API_URL);
  }, []);

  if (error) {
    return <h3 className={""}>Something went wrong.</h3>;
  }

  return (
    <>
      {isLoading ? (
        <h3 className={""}>Loading...</h3>
      ) : (
        products.map((product) => (
          <div className={"item-container"} key={product.id}>
            <img
              className="image-container"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="details">
              <h3 className={""}>{product.title}</h3>
              <button>Add to Cart</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};
