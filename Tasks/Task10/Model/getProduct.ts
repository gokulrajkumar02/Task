import { products } from "../Data/Product"
import type {Product} from "../Data/Product"

const getProducts = (id : number) : Product | undefined => {
    return (products.find(item => item.productId == id));
}

export { getProducts } 