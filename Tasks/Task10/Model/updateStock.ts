import { products } from "../Data/Product";
import type { Product } from "../Data/Product";

const decementStock = (count: number, currentProduct: Product): number => {
  const isDecrement =
    currentProduct.stock >= Math.abs(count)
      ? (currentProduct.stock += count)
      : 0;
  return isDecrement;
};

const incrementStock = (count: number, currentProduct: Product): number => {
  const isIncrement = (currentProduct.stock += count);
  return isIncrement;
};

const updateStock = (id: number, count: number): number => {
  const currentProduct = products.find((item) => item.productId === id);
  const isStocksAvailable = currentProduct ? currentProduct.stock > 0 : 0;

  if (!currentProduct || !isStocksAvailable || count === 0) return 0;

  const updatedStocks =
    count < 0
      ? decementStock(count, currentProduct)
      : incrementStock(count, currentProduct);
      
  return updatedStocks;
};

export { updateStock };
