"use client";
import { useEffect, useState } from "react";

const ProductsSection = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setData(productData)
    }
    getProducts()
  },[])
  

  return (
    <div>
      {data.map((items: any) => (
        <p key={items.id}>{items.title}</p>
      ))}
    </div>
  );
};

export default ProductsSection;
