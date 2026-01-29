const cart = [
{ id: 1, name: "iPhone 15", price: 80000, qty: 1, category: "mobile" },
{ id: 2, name: "AirPods", price: 20000, qty: 2, category: "audio" },
{ id: 3, name: "USB C Cable", price: 1000, qty: 3, category: "accessory" },
{ id: 4, name: "MacBook", price: 150000, qty: 1, category: "laptop" },
{ id: 5, name: "Charger", price: 2000, qty: 1, category: "accessory" },
{ id: 6, name: "iPhone 16", price: 80000, qty: 4, category: "mobile" },
{ id: 7, name: "AirPods pro", price: 20000, qty: 5, category: "audio" },
{ id: 8, name: "USB C Cable1", price: 1000, qty: 1, category: "accessory" },
{ id: 9, name: "MacBook pro", price: 150000, qty: 0, category: "laptop" },
{ id: 10, name: "Charger C", price: 2000, qty: 0, category: "accessory" },
];
const discountRate = {"mobile": 7,"audio": 5,"accessory": 2,"laptop": 10}; 

// Filter out items with qty <= 0
// Add total = price * qty to each item
// Calculate totalItems (sum of qty)
// Calculate totalAmount (sum of totals)
// Group items by category
// Apply category-based discount (mobile → 10%)
// Apply cart-level discount if total > 100000
// Return original total, final total, discount applied
// Write removeFromCart(cart, id) (immutable)
// Verify original cart is unchanged
// Handle edge cases (empty cart, invalid id)





const filteredCart = (cart) =>{
    let filteredItems = cart.filter(item => item.qty <= 0);
    return filteredItems;
}




const totalAmount = (cart,name)=>{
    let total = 0;
    cart.filter(items => {
        (items.name.toLowerCase() == name && items.qty> 0 ) ? total = items.price * items.qty : 0;
    })
    return total;
}


const totalCategory = (cart,category)=>{
    let total =0;
    cart.filter(items => {
        (items.category == category && items.qty > 0) ? total += items.qty : 0; 
    })
    return total;
}

const totalItemsAmount = (cart) => {
    let totalItemsAmountOutput = cart.map(item => 
        ({...item, total: item.price * item.qty}))
    return totalItemsAmountOutput;
};

const groupByCategory = (cart) =>{
    let groupByCategoryOutput = {}
    cart.map(item => {
        if(item.category in groupByCategoryOutput) groupByCategoryOutput[item.category].push(item);
        else groupByCategoryOutput[item.category] = [item];
    })
    return groupByCategoryOutput;
}

const applyCategoryDiscount = (cart, productName) => {
    let discountedAmount = 0;
    let productsTotalAmount = 0;
    productName.map(productItem => {
    cart.map( item => { (item.name == productItem && item.qty > 0) ? (discountedAmount += item.price / discountRate[item.category] ) : 0;
        // if(item.name == productItem && item.qty > 0){
        //     productsTotalAmount += item.price;
        //     discountedAmount += item.price / discountRate[item.category];
        // }
    })

})
    // return [productsTotalAmount, discountedAmount];
    return discountedAmount
}

const removeFromCart = (cart, id) => {
    cart.map((item, index) => { (item.id == id) ? cart.splice(index,1) : 0;
        // if(item.id == id){
        //     cart.splice(index, 1);
        // }


})
}

const mainTask6 = () => {

    // 1
    const cartData = filteredCart(cart);
    console.log(" 1) Filter out items with qty <= 0");
    console.log(cartData);
    //2
    let amountItems = totalAmount(cart,"charger");
    const isProductAvailable = (amountItems == 0) ? "Product not avaliable " : "Total amount for Product: "+ amountItems;
    console.log(" 2) Total amount for particular product");
    console.log(isProductAvailable);
    //3
    let totalItems = totalCategory(cart,"accessory");
    console.log(" 3) Total items using category");
    console.log("Total items in given category: "+ totalItems);

    //4
    console.log(" 4) Add total = price * qty to each item");
    // const k = cart.map(item => ({...item, total: item.price * item.qty}));
    console.log(totalItemsAmount(cart));

    //5
    console.log(" 5) Group items by category");
    console.log(groupByCategory(cart));

    //6 
    console.log("6) Apply category-based discount::"); 
    let discountPrice = applyCategoryDiscount(cart, ["AirPods","iPhone 15","MacBook"]);
    // console.log("Total Amount :",productPriceAndDiscount[0]);
    // console.log("Discount Amount",productPriceAndDiscount[1]);
    // console.log("After Discount Price to the total amount",productPriceAndDiscount[0]-productPriceAndDiscount[1]);
    console.log("Discount price for the product: ",discountPrice);
    
    
    
    
    

    // 7
    console.log("Deleted item from cart"); 
    removeFromCart(cart, 1);
    console.log(cart);
    
    
    

    
}
mainTask6();


