import { orderedProducts } from "../Data/Order";

export const processPayment = (id : number) : void => {
    const processIdPaid = orderedProducts.filter(item => item.status.toLowerCase() === "pending" ? item.status = "Paid" : 0);
    
}

