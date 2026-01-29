export type Order = {
    orderId : number,
    productId : number,
    name : string,
    price : number,
    stock : number
    status : string, 
}



export const orderList: Order[] = [
  {
    orderId: 1005,
    productId: 4,
    name: "Headphones",
    price: 2500,
    status: "Pending",
    stock: 3
  },
  {
    orderId: 1006,
    productId: 5,
    name: "Webcam",
    price: 3200,
    status: "Paid",
    stock: 1
  },
  {
    orderId: 1007,
    productId: 2,
    name: "Mouse",
    price: 800,
    status: "Shiped",
    stock: 4
  },
  {
    orderId: 1008,
    productId: 6,
    name: "Laptop Stand",
    price: 1800,
    status: "Pending",
    stock: 2
  },
  {
    orderId: 1009,
    productId: 3,
    name: "Monitor",
    price: 12000,
    status: "Paid",
    stock: 2
  },
  {
    orderId: 1010,
    productId: 7,
    name: "USB-C Hub",
    price: 2200,
    status: "Cancelled",
    stock: 1
  }
];




export const orderedProducts: Order[] = [{
    orderId: 101,
    productId: 2,
    name: "Mouse",
    price: 800,
    status: "Paid",
    stock: 2
  },
  {
    orderId: 102,
    productId: 1,
    name: "Keyboard",
    price: 1500,
    status: "Pending",
    stock: 2
  },
  {
    orderId: 103,
    productId: 2,
    name: "Mouse",
    price: 800,
    status: "Paid",
    stock: 2
  },
  {
    orderId: 104,
    productId: 3,
    name: "Monitor",
    price: 12000,
    status: "Shiped",
    stock: 1
  },
  {
    orderId: 10,
    productId: 1,
    name: "Keyboard",
    price: 1500,
    status: "Cancelled",
    stock: 1
  }
];