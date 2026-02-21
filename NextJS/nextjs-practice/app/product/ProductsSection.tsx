import React from "react";

const ProductsSection = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const productData = await response.json();
  return (
    <div>
      {productData.map((items: any) => (
        <p key={items.id}>{items.title}</p>
      ))}
    </div>
  );
};

export default ProductsSection;
