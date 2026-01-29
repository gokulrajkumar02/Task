import { orderedProducts } from "../Data/Order"
import type {Order} from "../Data/Order"
export const getOrder = (id : number | string) : Order[] => {

    if(typeof id === "number"){
        const orderId = orderedProducts.filter(item => item.orderId === id)
        return orderId;
    }
    else {
        const orderStatus = orderedProducts.filter(item => item.status.toLowerCase() === id.toLowerCase())
        return orderStatus;
        
    }
}