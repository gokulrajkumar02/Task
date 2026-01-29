Refer ---> Practice/JS/function.js



\*\*\*\*\*\*\*\*\*JavaScript is fundamentally synchronous and single-threaded



Road\_map link - https://roadmap.sh/javascript



Source Link - https://javascript.info/





\& - it is use for bitwise operations

\&\& - used for condition check 

(| and ||) - like \& and \&\&

alert - 

prompt - prompt("Enter your age","default value");

&nbsp;    comfirm - comfirm("Your are is above 18") - it is about yes or no

&nbsp;    and also comfirm will return a Boolean value true or false



unary addition = +"5" + -"6" - it convert the "5"(string) to number +5

&nbsp;		     	     - it convert the -"6"(string) to -6

&nbsp;		then the output is -1::



\*\*\*auto - type conversion :: 

&nbsp;  

console.log("5" / "10") the auto type conversion is happend (string to number and then perform an operation)

console.log("5" \* "10") the auto type conversion is happend (string to number and then perform an operation)

console.log("5" - "10") the auto type conversion is happend (string to number and then perform an operation)

like this we cannot do it for addition - if we do it is converted as a string (console.log("5" + "6")) - output:56



\*\*\* type conversion ::

&nbsp;1) let str = "123";

&nbsp;	console.log(Number(str)) - the output type is number

&nbsp;2) let st = "  1 2     3   "

&nbsp;	console.log(Number(st)) - output is NaN (Not a number)

\*\*\* multiplication is differ

&nbsp;1) let n = 2; 

&nbsp;   n \*= 3 + 5; - this will be converted into n = n \* (3 + 5) so the output is differ

&nbsp;   console.log(n) - output is 16

&nbsp;2) let n = 2;

&nbsp;   n = n \* 3 + 5;

&nbsp;   console.log(n) - output is 11



\*\*\* ( Precedence table )



Precedence	Name	Sign

…	…	…

14	unary plus	+

14	unary negation	-

13	exponentiation	\*\*

12	multiplication	\*

12	division	/

11	addition	+

11	subtraction	-

…	…	…

2	assignment	=



\*\*\* comma operator ::

&nbsp;let a = (1 + 2 , 3 + 4); ---> 1+2 is ignored

&nbsp;3 + 4 is 7 is stored in a

&nbsp;after comma the last value is stored in the variable



Math.floor - 4.9 to 4

Math.ceil - 4.9 to 5



hoisting reason ---> temporal dead zone using var can we archive the hoisting



snake case ---> sum\_num

kebab case ---> sum-num

camel case ---> sumNum

pascel case ---> SumNum



hoisting can't be use in let and const function and variable



\*\*\*  \&\& ---> alert(true \&\& "ok" \&\& "1") - output is 1

&nbsp;  if first is false it will return it otherwise move to next --- it will be repeated upto last

&nbsp;  if all true , it return the last 

&nbsp;  console.log(10 \&\& 2 \&\& null \&\& 3 ); for this it give a null as output



\*\*\* || ---> the first true getting value  is shown as a output

&nbsp;    console.log("" || ""|| "Notepad"||"Java-script") --> output will be notepad.

&nbsp;    if the all values are false it return's the last value 	



\*\*\* !(Not) - it will give the opposite value to the given value --> the Boolean value is the output

&nbsp;            console.log(!0)  ---> output true

\*\*\* !!(Nullish Coalescing) -- it just gives the Boolean value to the content 

&nbsp;     !!"java" - it is not-empty String so it is true

&nbsp;     !!"" - it is a empty string, so it is false;



\*\*\* ?? - 1 \&\& 2 - if first one defined it return's the first -- 

&nbsp;	defined means let a = "java" or let a= 10; not like this let a=null;

&nbsp;	defined value should not be null

&nbsp;   working with this ?? we want to use the parentheses to tell the precedence to the compiler

\*\*\* for loop

&nbsp;	let i = 0;



&nbsp;	for (; i < 3;) {

&nbsp; 	    alert( i++ );

&nbsp;	} 



completed upto 2.15



\*\*\* we set a default value for the function(if the value is not given to the function):

&nbsp;   like this 

&nbsp;   function showMessage(text="Hello") {

&nbsp;   // ...

&nbsp;      console.log(text);

&nbsp; 

&nbsp;   }



&nbsp;   showMessage(10);



\*\*\* call-back functions ::

function ask(question, yes, no) {

&nbsp; if (confirm(question)) yes()

&nbsp; else no();

}



function showOk() {

&nbsp; alert( "You agreed." );

}



function showCancel() {

&nbsp; alert( "You canceled the execution." );

}



// usage: functions showOk, showCancel are passed as arguments to ask

ask("Do you agree?", showOk, showCancel);

\*\*\*



\*\*\* function store in a value is function expression -- example 

&nbsp;   let sum = function(a,b){

&nbsp;        return a + b;	

&nbsp;   }

&nbsp;   console.log(sum(2,3));



\*\*\* we can use only function declaration for hoisting



\*\*\* different function using if-else part:::



&nbsp;	let age = prompt("What is your age?", 18);



&nbsp;	let welcome;



&nbsp;	if (age < 18) {



&nbsp; 	   welcome = function() {

&nbsp;   	   alert("Hello!");

&nbsp; 	};



&nbsp;	} else {



&nbsp; 	    welcome = function() {

&nbsp;  	    alert("Greetings!");

&nbsp; 	};



&nbsp;	}



&nbsp;	welcome();

\*\*\* to return a object , use the parentheses:::

const getUser = () => ({ name: "Gokul" });





\*\*\* curly braces is used for multiple line in arrow function 

&nbsp;   there is a single line in arrow functions we can use like this type of function -- 

&nbsp;	let sum = (a, b) => a + b; -- in this the a + b value is return automatically:

&nbsp;	and then console.log(sum);



\*\*\* ALL FUNCTIONS:::

We covered three ways to create a function in JavaScript:



&nbsp;1) Function Declaration: the function in the main code flow



function sum(a, b) {

&nbsp; let result = a + b;



&nbsp; return result;

}

&nbsp;2) Function Expression: the function in the context of an expression



let sum = function(a, b) {

&nbsp; let result = a + b;



&nbsp; return result;

};

3\) Arrow functions:



// expression on the right side

&nbsp;   let sum = (a, b) => a + b;



// or multi-line syntax with { ... }, need return here:

&nbsp;   let sum = (a, b) => {

&nbsp;   // ...

&nbsp;       return a + b;

&nbsp;   }



&nbsp;  // without arguments

&nbsp;   let sayHi = () => alert("Hello");



&nbsp;   // with a single argument

&nbsp;   let double = n => n \* 2; 

&nbsp;	 



\*\*\*ERROR 

&nbsp; Syntax error 

&nbsp;  	let a = 10;

&nbsp;       let a = 10000;

&nbsp; type error ::

&nbsp;	const a = 1000;

&nbsp;	 a = "g";

&nbsp; reference error :

&nbsp;        console.log(a);

&nbsp; 	 let a = 10;



temporal dead zone :: time between the hoisting and initilization to the variable:

&nbsp;   example :

&nbsp;	console.log(a); - hoisting a

&nbsp;   	let b = 10;

&nbsp;	let a = "g" - time gap between the hoisting and initilization



\*\*\* the const variable should be declared and initilized in a same line only. const val;--syntax error



\*\*\* map -- it is used when you a new array and performed value is stored in the new array

&nbsp;    let val = \[1,2,3,4,5];

&nbsp;    let double = val.map(i => i\* 2)

&nbsp;    console.log(val);

&nbsp;    console.log(doubled);

&nbsp;   --- the value is doubled and stored in a new array (doubled)



\*\*\* for-each loop - Used when you want to perform an action on each element, but you don’t need a new array.

&nbsp;		and also you can't break the loop(connot use break and continue)

&nbsp;		--- cannot give a new array.

&nbsp;		--- it is only use to iterate a array only

&nbsp;    let val = \[1,2,3,4,5];

&nbsp;    val.foreach(i => console.log(i\*2) ); 





\*\*\* for ... of loop - it give only values from the array also you can break the loop

&nbsp;	let colors = \["red", "blue", "green"];



&nbsp;	for (let color of colors) {

&nbsp; 	      console.log(color);

&nbsp;	}



\*\*\* for ... in loop - Used when you want to loop through the keys (properties) of an object.

&nbsp;		      also you can break the loop

&nbsp;	let user = {

&nbsp; 		name: "Gokul",

&nbsp; 		age: 20

&nbsp;	};



&nbsp;	for (let key in user) {

&nbsp; 		console.log(key, user\[key]);

&nbsp;	}





\*\*\* object in JS ::

&nbsp;    use dot for put and get the data from object

&nbsp;	 let obj = {};

&nbsp;	 obj.name ="Bob"

&nbsp;        obj.age = 30;



&nbsp;	Dot notation (.) — most common



&nbsp;	Use when:



&nbsp;	\*\*\*Property name is fixed



&nbsp;	\*\*\*Property name is a valid identifier



&nbsp;	\*\*\*You know the key at coding time      





\*\*\* insert to the object and get the value from object using square bracket:::

&nbsp;	

&nbsp;	let fruit = prompt("Which fruit to buy?", "apple"); // this user input is given to the object name for--> fruit

&nbsp;	let bag = {

&nbsp; 		\[fruit]: 5, 

&nbsp;	};



&nbsp;	alert( bag.apple );





&nbsp;	let user = {

&nbsp; 		name: "John",

&nbsp; 		age: 30

&nbsp;	};



&nbsp;	let key = prompt("What do you want to know about the user?", "name");



&nbsp;	// access by variable

&nbsp;	alert( user\[key] );

&nbsp;

&nbsp;	\*\*RULES to use brackets :

&nbsp;	

&nbsp;		Bracket notation (\[ ]) — more powerful



&nbsp;		Use when:



&nbsp;		Property name is dynamic (stored in a variable)



&nbsp;		Property name contains spaces



&nbsp;		Property name contains special characters



&nbsp;		Property name is a number





\*\*\* short-end property to return an object and then it stored in a variable

&nbsp;	function makeUser(name, age) {

&nbsp; 		return {

&nbsp;   		name: name,

&nbsp;   		age: age,

&nbsp;   		// ...other properties

&nbsp; 		};

&nbsp;	}



&nbsp;	let user = makeUser("John", 30);

&nbsp;	alert(user.name);



\*\*\* special operator (in) used to check the key is present in the object or not



&nbsp;	let user = { name: "John", age: 30 };

&nbsp;	alert( "age" in user ); // true



\*\*\* in object - the key is a number then it is sorted in ascending order.



\*\*\* object copy with reference -- copy value and same reference:

&nbsp;    let obj1 = {name : "java"};

&nbsp;    let obj2 = obj1; -- the 2 object reference are same , if use make change in any one it also change in another also



\*\*\* clone with object -- copy value but different reference:::

&nbsp;	clone using for in loop:::

&nbsp;		let user = {

&nbsp; 		name: "John",

&nbsp; 		age: 30

&nbsp;		};



&nbsp;	let clone = {}; // the new empty object



&nbsp;	// let's copy all user properties into it

&nbsp;	for (let key in user) {

&nbsp; 		clone\[key] = user\[key];

&nbsp;	}



&nbsp;	// now clone is a fully independent object with the same content

&nbsp;	clone.name = "Pete"; // changed the data in it



&nbsp;	alert( user.name ); 



&nbsp;syntax for Object.assign -- Object.assign(destination,source1,source2,....sourcen)





&nbsp;   clone using a methods -- Object.assign :::

&nbsp;	let user = { name: "John" };



&nbsp;	let permissions1 = { canView: true };

&nbsp;	let permissions2 = { canEdit: true };



&nbsp;	// copies all properties from permissions1 and permissions2 into user

&nbsp;	Object.assign(user, permissions1, permissions2);



&nbsp;	// now user = { name: "John", canView: true, canEdit: true }

&nbsp;	alert(user.name); // John

&nbsp;	alert(user.canView); // true

&nbsp;	alert(user.canEdit);



&nbsp;   clone using empty object as destination and then stored in varibale



&nbsp;	let user = {

&nbsp; 	     name: "John",

&nbsp; 	     age: 30

&nbsp;	};



&nbsp;	let clone = Object.assign({}, user);



&nbsp;	alert(clone.name); // John

&nbsp;	alert(clone.age);



&nbsp;  \*\*\* in this above clone nested object has the same reference after the clone -- to overcome this use structureclone(object);





\*\*\* structuredclone:::

&nbsp;	let user = {

&nbsp; 	    name: "John",

&nbsp; 	    sizes: {

&nbsp;           	height: 182,

&nbsp;       	width: 50

&nbsp; 	      }

&nbsp;	};



&nbsp;	let clone = structuredClone(user);



&nbsp;	alert( user.sizes === clone.sizes ); // false, different objects



&nbsp;	// user and clone are totally unrelated now

&nbsp;	user.sizes.width = 60;    // change a property from one place

&nbsp;	alert(clone.sizes.width); // 50 is the output



&nbsp; \*\*\* it clone the object deeply - so it can handle the circular reference



&nbsp;    let user = {};

&nbsp;	// let's create a circular reference:

&nbsp;	// user.me references the user itself

&nbsp;    user.me = user;



&nbsp;    let clone = structuredClone(user);

&nbsp;    alert(clone.me === clone); // true is the ouput



&nbsp;    \*\*\*in this above code - the clone is also copied but the circular reference is pointed to the cloned object.

&nbsp;	

&nbsp;	Creates a new object clone

&nbsp;	Copies properties

&nbsp;  	Detects that me refers back to the original object

&nbsp;	Rebuilds the same circular structure in the clone     



\*\*\*Parameters - default parameter, Rest Parameter - destructuring Parameter - 

&nbsp;  default para - in the function the default value is initialized 

&nbsp;  Rest para - function(...number) - the three dot variable will take the all input in single data type and also 

&nbsp;		place last in the function parameter

&nbsp;  Dstructuring para - the object is given as a argument and the de-structured and get it as an parameter 

&nbsp;			example ::

&nbsp;				function obj({name, age}){

&nbsp;					console.log(name," ",age);

&nbsp;				}

&nbsp;				obj({name : "Gokul", age : 21})



\*\*\* IIFEs (Immediately Invoked Function Expressions)

&nbsp;	(function () {

&nbsp; 	    let text = "Hello! I called myself";

&nbsp;   	    console.log(text);

&nbsp;	})()



&nbsp;	IIFE's arrow function

&nbsp;		((name) => {

&nbsp; 		     let text = "Hello " + name;

&nbsp;		})("John Doe");





\*\*\* Array methods :::

&nbsp;   map - transformation of the original array to new array with the functions:



&nbsp;	let val = \[1,2,3,4,5];

&nbsp;       let double = val.map( item => item \* 2)

&nbsp;	console.log(double);

&nbsp;  -- it will form an new array

&nbsp;  

&nbsp;  filter - transformation of the new array of value with satisfied the given condition

&nbsp;       let val = \[1,2,3,4,5];

&nbsp;       let filtered = val.filter( item => item < 5)

&nbsp;       console.log(filtered); // output 1,2,3,4..



&nbsp;  reduce - transform the original array to single 



&nbsp;	let val = \[1,2,3,4,5];

&nbsp;	let sum\_val = val.reduce((acc,curr) => acc + curr,0) // 0 tis the default value of accumulator

&nbsp;       console.log(sum\_val)

&nbsp;	

\*\*\* in arrow function don't have this keyword if you use it . it will be undefined or error

like this function and inside there is an arrow function so we can access the name--> kumar.

&nbsp;	const user = {

&nbsp;   		name: "Kumar",

&nbsp;   		greet() {

&nbsp;       	const name = "yes";

&nbsp;       	const ko = () => {

&nbsp;           	     console.log(this.name)

&nbsp;       	}

&nbsp;       	ko()

&nbsp;   		},

&nbsp;	};



&nbsp;	user.greet();



\*\*\* in setTimeOut and setInterval - the print statement executes first and then the promise will run if exists and  

&nbsp;   by the time in the setTimeOut and setInterval it will executed



\*\*\*closure - bundling a function with its lexical scope and then retuned - image in slack(you)\*\*\*

&nbsp;	function closure() {

&nbsp;   	let l = 0;

&nbsp;   	function outer() { 

&nbsp;       	let v = 10; // this variable is enclosed in the closure in bundling

&nbsp;       	function inner() {

&nbsp;           		v++;

&nbsp;           		l++;

&nbsp;           		console.log(v);

&nbsp;           		console.log(l);

&nbsp;       	}

&nbsp;       	inner();

&nbsp;       	return inner; // returning the inner function (closure)

&nbsp;   		}

&nbsp;   		return outer();

&nbsp;	}

&nbsp;	let afterClosure = closure();

&nbsp;	afterClosure(); // calling the inner function again





\*\*\*Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.

\*\*\*

&nbsp;	inside call stack - there  is a global execution context and then functions are stored for execution

&nbsp;			    it quickly execute the content inside the call stack... and pop-up the function

&nbsp;			    at last it also pop-up the global execution content also



\*\*\* Web-API's --  this are not a part of JS, this are a part of browser's

&nbsp;	\* setTimeOut

&nbsp;	\* DOM API's - document.getElementById etc..... and addEventListener

&nbsp;	\* fetch

&nbsp;	\* localStorage

&nbsp;	\* console

&nbsp;	\* locations

&nbsp;the browser gives a access to use this Web-API's in JavaScript 

&nbsp;---- this all web-API's are given through the window.setTimeOut to JavaScript 



&nbsp; window is global object- inside that the web-api's are present so, don't use the window keyword to use the web-api's



&nbsp;  it setTimeOut and the fetch are executed in WEB-API's, after that it is push to callback queue



&nbsp; slack(you) - 2 screenshot - 1) setTimeOut - callback queue

&nbsp;		              2) fetch in microtask queue





\*\*\*\*DOM --- Document Object Model

&nbsp;	

&nbsp;	\*-The DOM (Document Object Model) is a tree-like representation of an HTML document that allows JavaScript to 		dynamically access, modify, and control web page elements.



&nbsp;	With DOM ---> You can:



&nbsp;		Change text



&nbsp;		Change colors



&nbsp;		Add elements



&nbsp;		Remove elements



&nbsp;		Handle clicks



&nbsp;		Validate forms



\*\*\* BOM - Browser Object Model :

&nbsp;	it allow the javascript to access the browser or interacts with the browser itself

&nbsp; 		-- window, location, history, navigation, screen



in tag - innerText and in input field -- .value --- both used to get the value..



innerText -- this text set to the HTML

innerHTML -- <i>kjihuhiejf</i> - this text set to the HTML tag as italic



EventListener ::: difference

everytime changes -- input

onclick on outside of input or press enter -- change



\*\*\* Promise - are used to handle async operation in js 

initially - the promise create a empty object and when it is completed it's execution and the empty object will be filled with the response data



we can use promise chaining instead of many callbacks 



&nbsp;	const promise = fetch(api) // it will return a promise



&nbsp;	promise.then(function(orderId){

&nbsp;  		showDetails(orderId));

&nbsp;	})



fetch

axios



Login page



\*\*\*slice - to get a array element 

&nbsp;	const ele = \[1,2,3,4,5,6]

&nbsp;	console.log(ele.slice(0,3))

&nbsp;ele.slice(start,end) --> start and end is index



\*\*\*splice - it will modify the original array

&nbsp;     array.splice(startIndex, deleteCount, item1, item2, ...);

&nbsp;     start index for delete, deleteCount to delete the element from index, after delete add element from start index



&nbsp;	const arr =\[1,2,3,4,5]

&nbsp;  	arr.splice(0,2,8,9)

&nbsp;	from 0 index , the next two element are removed and 8,9 is added

&nbsp;	after splice the array will be -> \[8,9,3,4,5]





\*\*\* event deleation in js



&nbsp;   <ul id="menu">

&nbsp;       <li>Items 1</li>

&nbsp;       <li>Items 2</li>

&nbsp;       <li>Items 3</li>

&nbsp;   </ul>

&nbsp;   <script>

&nbsp;        const menu = document.getElementById("menu");

&nbsp;        menu.addEventListener("click", (e) => {

&nbsp;           alert(e.target.innerText);

&nbsp;        })

&nbsp;   </script>





\*\*\* Event bubbling -- it was an default behavior of the code

&nbsp;   <div id="parent">

&nbsp; 	<button id="child">Click Me</button>

&nbsp;   </div>



&nbsp;   <script>

&nbsp;       document.getElementById("parent").addEventListener("click", () => {

&nbsp;       console.log("Parent clicked");

&nbsp;        },false);



&nbsp;      document.getElementById("child").addEventListener("click", () => {

&nbsp;      console.log("Child clicked");

&nbsp;     });

</script>



--- when you click on the child ---> click me ->> the child event and also a parent event also called in this event bubbling

\*\*\*--- the third variable is default set to false - if you change true-----> it was an event capturing



input : when you click on the click in your webpage

Output is ::: child clicked

&nbsp;	      parent clicked





\*\*\* event capturing:::



<div id="parent">

&nbsp; 	<button id="child">Click Me</button>

&nbsp;   </div>



&nbsp;   <script>

&nbsp;       document.getElementById("parent").addEventListener("click", () => {

&nbsp;       console.log("Parent clicked");

&nbsp;        },true);



&nbsp;      document.getElementById("child").addEventListener("click", () => {

&nbsp;      console.log("Child clicked");

&nbsp;     },true);

</script>



--- when you click on the child - the third variable is true, then when you click on the child, first the grand parent ,                                       parent is called , then the child is called in addEventListener



\*\*\* removeEventListener:::

&nbsp;    **Using { once: true } (Modern way)**



&nbsp;    **Browser automatically removes the listener after one run:**



&nbsp;    button.addEventListener("click", () => {

&nbsp;       console.log("Runs only once");

&nbsp;    }, {**once: true })**





**\*\*\* Correct way to removeEventListener::: for this, callback function does not work properly**

        <button id="btn">Click me</button>

&nbsp;       <script>

&nbsp;           const button = document.getElementById("btn");



&nbsp;           function onceHandler() {

&nbsp;               alert("Clicked only once!");

&nbsp;               button.removeEventListener("click", onceHandler);

&nbsp;           }



&nbsp;           button.addEventListener("click", onceHandler);

&nbsp;       </script>





\*\*\* Higher-order functions



A Higher Order Function is a function that does at least one of these:



&nbsp;   1) Takes another function as an argument -- callback



&nbsp;   2) Returns a function as its result --- (one function return an another function )

&nbsp;        example :::

&nbsp;        function multiplier(factor) {

&nbsp; 		return function(num) {

&nbsp;   			return num \* factor;

&nbsp; 		};

&nbsp;	}



&nbsp;	const double = multiplier(2);

&nbsp;	console.log(double(5)); // 10


let isTimerStartStop = false;
let isTimerPauseContinue = false; give names like this

greatest and smallest using a typescript 





