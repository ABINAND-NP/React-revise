import React, { useEffect, useState } from "react";

const FeatchAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responce = await fetch("https://dummyjson.com/products?limit=10");

        const fetchData = await responce.json();

        console.log(fetchData);   
        
        setProducts(fetchData.products);

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProducts()
  }, []);

  return <div>
    <h1>Products List</h1>
    {
        products.map((product) => (
            <div key={product.sku}>
                <h6>{product.title}</h6>
                <h6>$ {product.price}</h6>
                <img src={product.thumbnail} width={"70px"} height={"100px"} />
            </div>
        ))
    }
  </div>;
};

export default FeatchAPI;
