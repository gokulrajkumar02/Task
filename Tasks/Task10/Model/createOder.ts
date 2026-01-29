import { orderedProducts } from "../Data/Order";
import { products } from "../Data/Product";
import type { Order } from "../Data/Order";

export const getProductsToOrder = () => {
  products.map((items) => console.log(items));
};

export const createOrder = (
  orderId: number,
  productId: number,
  count: number,
): void => {
  const orderingItem = products.find(
    (items) => items.productId === productId && items.stock >= count,
  );

  if (!orderingItem) return;

  orderingItem.stock = count;

  // products.find(item => {
  //     (item.productId == productId) ? item.stock -= count :0 ;
  // });

  //   console.log(orderingItem)

  const orderObject: Order = { orderId, ...orderingItem, status: "Pending" };
  //   console.log(orderObject);

  // const orderPlaced = orderedProducts.find((item) =>
  //   item[0].orderId === orderId ? item.push(orderObject) : 0,
  // );

  const finalOrder =  orderedProducts.push(orderObject);
  

};
