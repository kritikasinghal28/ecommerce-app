import React, { useState, useEffect } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
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
      {products.map((product) => (
        <div className={""} key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>

          <button>Add to Cart</button>
        </div>
      ))}
    </>
  );
};
