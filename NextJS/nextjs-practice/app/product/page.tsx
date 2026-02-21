import { Suspense } from "react";
import ProductsSection from "./ProductsSection";

export default function StorePage() {
  return (
    <div>
      <h1>My Store</h1>

      <Suspense fallback={<p>Loading Products...</p>}>
        <ProductsSection/>
      </Suspense>

    </div>
  );
}
