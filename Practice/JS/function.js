// const natural_num = (n)=>{
//     let sum =0;
//     for(let a = 1;a<=n;a++){
//         sum += a;
//     }
//     return sum;
// };
// console.log(natural_num(5));


// const palindrome = (s)=>{
//     if(typeof s == "number"){
//     let ori = s;
//     let num = 0;
//     while(s > 0){
//         num = num * 10 + s % 10;
//         s = Math.floor(s/10);
//     }
//     console.log(ori," ",num);

//     if(ori == num) return "Palindrome number";
//     else return "Not a palindrome number";  
// }
// else{
//     let len_s= s.length;
//     let left = 0,right = len_s-1;
//     let flag =true;
//     while(left < right){
//         if(s[left] != s[right]){
//             flag = false;
//             break;
//         }
//         left++;
//         right--;
//     }
//     if(flag) return "Given string is palindrome";
//     else return "Given string is not a palindrome";    
// }

// };
// console.log(palindrome(121));

// let factorial = (n)=>{
//     let num = 1;
//     while(n > 0){
//         num *= n;
//         n--;

//     }
//     return num;
// }
// console.log(factorial(5));



// function hoisting() {
//     console.log(a);
//     console.log(b); 

//     var a = 10;
//     let b = 20;

//     console.log(a); 
//     console.log(b); 
// }

// hoisting();


// console.log(10 && 2 && null && 3 ); // null

// default value for the parameter::
// function showMessage(text="Hello") {
//   // ...
//   console.log(text);

// }

// showMessage(10);

// let sum = function min(a,b=10){
//     return a + b;
// }
// let result = sum;
// console.log(result(2,3));

// console.log(sum(2));


// let sum = (a, b) => { 
//   let result = a + b;
//   console.log(result); 
// };
// sum(1, 2); 

// let a =[1,2,3,4,5];
// for(let key in a){
//     console.log(key," ",a[key]);
// }

// let user = {
//   name: "John",
//   surname: "Smith"
// };
// user.age = 25;


// for (let prop in user) {
//   console.log(prop," ",user[prop]); 
// }


// function makeUser(name, age,ph) {
//   return {
//     name: name,
//     $age: age,
//     Ph : ph
//   };
// }

// let users = makeUser("John", 30,1234567890);
// console.log(users["name"],users["$age"],users["Ph"]);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone =structuredClone(user);

// console.log( user.sizes === clone.sizes ); 

// user.sizes.width = 60;    
// console.log(user.sizes.width);
// console.log(clone.sizes.width);

// function sumAll(...numbers) {
//   let double = numbers.map(n => n * 2);

//   return double;
// }
// console.log(sumAll(1, 2, 3, 4, 5));

// function obj({name, age}) {
//     console.log(name," ",age);

// }

// obj({name : "Gokul", age : 21})

// const person = {
//   name: "John",
//   greet:(
//     function(){
//         return this.name
//     })

// };
// console.log(person.greet());


// let iife= ( () =>{
//   let text = "Hello! I called myself";
//     console.log(text);
// })()


// var argu = [1, 2, 3];
// var a = () => argu[2];
// console.log(a());

// function func(n) {
//     var f = () => argu[0] + n; 
//     return f();
// }
// console.log(func(3));


// let val = [1,2,3,4,5];
// let sum = val.reduce((acc,curr) => acc + curr,0);
// console.log(sum);


// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log("Hello, I am " + this.name);
//   }
// }

// const u1 = new User("Kumar");
// const u2 = new User("Arun");

// u1.sayHello(); 
// u2.sayHello(); 

// const user = {
//     name: "Kumar",
//     greet() {
//         const name = "yes";
//         const ko = () => {
//             console.log(this.name)
//         }
//         ko()
//     },
// };
// user.greet();

// function factorial(n){
//     if(n == 1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// console.log("kjn")
// let intervalId = setInterval(()=>{
//     console.log("Hello");
//     clearInterval(intervalId);
// },3000);
// console.log("hi");


// const myObject = {   
//   myProperty: 12,
//   log() {
//     console.log(`myProperty: ${this.myProperty}`); 
//   },
// };

// myObject.log(); 
// setTimeout(() => myObject.log(), 2000);


// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task One completed");
//         callback();
//     },);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task Two completed");
//         callback();
//     },);
// }

// task1(function () { task2(function () { console.log("Both tasks completed");});});



function closure() {
    let l = 0;
    function outer() { 
        let v = 10; // this variable is enclosed in the closure in bundling
        function inner() {
            v++;
            l++;
            // console.log(v);
            // console.log(l);
        }
        inner();
        return inner;

     // returning the inner function (closure)
    }

    console.log(outer,"outer function");
    console.log(outer(),"calling outer function");
    return outer();
}
let afterClosure = closure();
afterClosure(); // calling the inner function again


