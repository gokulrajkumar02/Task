"use client";

import { Suspense, useEffect, useState } from "react";
import ProductsSection from "./ProductsSection";

export default function Page() {
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>My Store</h1>
      <ProductsSection />
      <Suspense fallback={<h2>Loading...</h2>}>
        {showProducts && <ProductsSection />}
      </Suspense>
    </div>
  );
}
