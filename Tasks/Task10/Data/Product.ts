export type Product = {
    productId: number;
    name : string;
    price : number;
    stock : number;
}

const products : Product[] = [
  {
    productId: 1,
    name: "Keyboard",
    price: 1500,
    stock: 10
  },
  {
    productId: 2,
    name: "Mouse",
    price: 800,
    stock: 25
  },
  {
    productId : 3,
    name : "Monitor",
    price : 20000,
    stock : 3
  }
];

export { products }