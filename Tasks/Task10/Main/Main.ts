import {getProducts} from "../Model/getProduct"
import {updateStock} from "../Model/updateStock"
import {getProductsToOrder} from "../Model/createOder"
import { createOrder } from "../Model/createOder";
import {orderedProducts} from "../Data/Order"
import {getOrder} from "../Model/getOrder"
import { processPayment } from "../Model/processPayment";

console.log(" 1) Get products using id");
console.log(getProducts(1));

console.log(" 2) Checking the stock is updated");
(!updateStock(3,4) ? console.log("Stock is less than count") :console.log("Stock updated Successfully"));
console.log( getProducts(3));



console.log(" 3) Display the products to order");
// getProductsToOrder();


createOrder(106,1,1)
createOrder(107,2,1)
createOrder(108,2,1)

console.log(orderedProducts);

console.log(" 4) getProduct from the order");

const getOrderByIdStatus =  getOrder("PAID")
console.log(getOrderByIdStatus);

console.log(" 5) processPayment for pending orders")

processPayment(102);

console.log(orderedProducts);





