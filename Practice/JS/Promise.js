function createPromise(cart) {
    return new Promise((resolve,reject) => {
        if(cart.length > 0){
            resolve(["Cart has a items", cart.length]);
        }
        else {
            let err = new Error("Cart is empty");
            reject(err);
        }
    })
}


cart = [''];
const promise = createPromise(cart); 
promise.then(function([message,count]){
    console.log("Success: " + message + " with count " + count);
    return count;
})
.catch(function(err){
    console.log("Error :", err.message);
    
})
.then(function(count){
    console.log("Total items in cart: " + count);
})


// function createPromise(cart) {
//   return new Promise((resolve, reject) => {

//     console.log("Promise is in PENDING state...");

//     // simulate async operation (like API call)
//     setTimeout(() => {
//       if (cart.length > 0 && cart[0] !== "") {
//         resolve(["Cart has items", cart.length]);
//       } else {
//         reject(new Error("Cart is empty"));
//       }
//     }, 2000); // 2 seconds delay
//   });
// }

// const cart = ['apple', 'banana'];

// const promise = createPromise(cart);

// promise
//   .then(function ([message, count]) {
//     console.log("Fulfilled:", message, "with count", count);
//     return count;
//   })
//   .catch(function (err) {
//     console.log("Rejected:", err.message);
//   })
//   .then(function (count) {
//     if (count !== undefined) {
//       console.log("Total items in cart:", count);
//     }
//   });


