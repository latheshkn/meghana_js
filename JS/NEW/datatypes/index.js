// primitive datatypes in javascript
// 1. undefined 2. boolean 3. number  4. String  5. BigInt  6. Symbol




// console.log(3**3);
// console.log("meghna"+3);
// let a=5;
// let b=10;
// /* console.log("a is: "+a+" "+"b is: "+b);
// let temp=null;
// temp=a;
// a=b;
// b=temp;
// console.log("a is: "+a+" "+"b is: "+b); */

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("a is: "+a+" "+"b is: "+b);





/* // Difference between == and ===

let num_one = 101;
let num_two = "101";
console.log(typeof(num_one));
console.log(typeof(num_two));

console.log(num_one == num_two);
console.log(num_one === num_two); */




/* // leap year

let input_year=2020;
debugger;
if(input_year%4===0){

    if(input_year%100==0){

        if(input_year%400===0){

            console.log("leap year");
        }else{
            console.log("not leap year");
        }
    }else{
        console.log("leap year");
    }
    
}
else{
    console.log("not a leap year");
} */




// falsy values in js=>0,"",null,undefined,NaN
// assign any of the falsy values-> default is false

/* // ternary operator
var age =18;    //condition //if true  //if False
                                    // |
                                    // v
                            // |
                            // v
                // |
                // v
console.log((age>=18)?"Can vote":"Cannot vote"); */




// for
/* debugger;
for(var num=1; num<=10;num++){
    console.log(num);
} */

/* x=0;
for(x=1;x<=10;x++){
    let tableOf=8;
    console.log(tableOf +"*"+x+"="+(tableOf*x));
} */

// functions
// difference between function parameters and function arguements
// function parameters: names listed in the function definition
// function arguements: real values passed to the functions

/* // anonymous functions
var funExp=function(a,b){
    return total= a+b;
}
var sum=funExp(5,12);
 console.log("The sum of two numbers is: "+sum); */

 // var -> function scope
 // let and const-> block scope


/*  // default parameters
 // default function parameters allow parameters to be initialised with default value when no parameters are given

let defParams= function(a,b=5){
    return total=a+b;
}

let result=defParams(4);
console.log(`Result is ${result}`);
 */


/*  // arrow functions
 const sum= () => {
     let a=5, b=6;
     total=a+b;
     return console.log(`The total amount is: ${total}`);;
 }


 sum(); */



 /* // arrays
 var emp =["meghana","vikas","lathesh","paddu","pankaj","archana"];
 console.log(emp.length);
 console.log((emp.length)-1); */

//  var emp =["meghana","vikas","lathesh","paddu","pankaj","archana"];
 // in => index
 /* for(let elements in emp){
     console.log(emp[elements]);
 } */
/* 
 for(let elements of emp){
     // for array element
     console.log(elements);
 } */


 /* // for each loop
 emp.forEach(function(elements,index,array){
        console.log(elements);
 });
 */
// arrow function does not support arrow functions
/* emp.forEach((elements,index,array)=>{
    console.log(elements);
}); */
 
// array push appends to the end of the array 
// array unshift appends to the beginning of the array

// splice -> return type ->returns number of items returned
// const newEmp = emp.splice(6,0,"Yashas");

/* // update
const indexOfEmp=emp.indexOf("meghana");
console.log(indexOfEmp);
if(indexOfEmp>=0){
    const updateEmp = emp.splice(indexOfEmp,1,"Meghana");
    console.log(emp);

}
else{
    console.log("Not found");
}
 */
/* // delete

const indexOfEmp=emp.indexOf("meghana");
console.log(indexOfEmp);
if(indexOfEmp>=0){
    const updateEmp = emp.splice(indexOfEmp,1);
    console.log(emp);

}
else{
    console.log("Not found");
} */
// map() creates a copy of the array
/* 
let arr=[25,36,49,64,81];

let NewArray=arr.map((currentElement)=>{
    return Math.sqrt(currentElement);
});

console.log(NewArray); */
/* 
let arr=[2,3,4,6,8];

let NewArray=arr.map((currentElement)=>{
    return currentElement*2;

}).filter((currentElement)=>{
     
    return currentElement >10
});

console.log(NewArray); */

// reduce method
// used to flatten the array i.e, to convert the 3d or 2d array into a single dimension array
// reducer function takes 4 parameters: accumulator , current value, current index, source array

/* // sum of elements in an array
let initial =10;
let arr=[5,6,1,2,3];
let sum=arr.reduce((accumulator,currentElement,index,array)=>{
        return accumulator=accumulator+currentElement;
},initial);

console.log(sum); */

/* // convert 2D array to single dimension
const arr = [
    ['1','2'],
    ['3','4'],
    ['5','6'],
    ['7','8'],
    ['9','10'],
];


let concatArr = arr.reduce((accumulator,currentElement)=>{
        return accumulator.concat(currentElement);
});

console.log(concatArr); */


/* // lastIndexOf()
// returns the index within the calling String object of the  last occurance of the search value
const newString="Meghana Balakrishna";
console.log(newString.lastIndexOf("a",5)); */


/* //search
// searches  a string and returns its position
const myName="Meghana Balakrishna";
let searchKey=myName.search("ana");
console.log(searchKey); */


// extracting string parts
// 3 methods
// 1. slice(start,end)
// 2. substring(start,end)
// 3. substr(start,length)


/* // CH 
// display only 280 characters
 let myArray="Welcome, to Complete JavaScript Tutorial for Beginners in Hindi in 2021. We will cover Basic to Advanced Javascript, Modern JavaScript, OOPS in JavaScript in Hindi. We go through 15+ JavaScript Interview questions and answers, 20+ Challenges in JavaScript in Hindi. In the end, we will create 7+ Projects in JavaScript in Hindi and Many Bonus Topics like API, WEB API, JSON, AJAX, and many more all in One Complete JavaScript Course in Hindi.  ";

 let chop=myArray.slice(0,279);
 console.log(chop);
 */

/* //  substring is similar to slice but does not take negative input
let myArray="Welcome, to Complete JavaScript";
let res = myArray.substring(3,8);
console.log(res); */

/* //substr()
var str="Welcome, to Complete JavaScript";
let res=str.substr(2,9);
console.log(res); */


/* // replacing string content
let myArray="Welcome, to Complete JavaScript";
let res=myArray.replace("Complete","complete");
console.log(res); */


// string extraction
// charAt()
// charCodeAt()->returns unicode of the character
// Property Access []

/* // charAt()
let myArray="Welcome, to Complete JavaScript";
console.log(myArray.charAt(5));
console.log(myArray.charCodeAt(5)); */


/* let myArray="Welcome, to Complete JavaScript";
console.log(myArray.toUpperCase()); */

/* // convert a string to an array->split()
let myString= "a,b,c,d,e,f,g,h,i";
console.log(myString.split(",")); */

// Date and time
/* let curDate=new Date();
console.log(curDate);
console.log(curDate.toLocaleString());
console.log(curDate.toString());
console.log(Date.now().toString());
var d=new Date(1618918260177);
console.log(d.toLocaleString());
console.log(d.getDate());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString()); */

/* // Math 
console.log(Math.PI);
let num=10.9;
console.log(Math.round(num));
console.log(Math.pow(2,7));
console.log(Math.sqrt(10));
console.log(Math.abs(-10));
console.log(Math.ceil(10.89));
console.log(Math.floor(10.89));
console.log(Math.trunc(-10.89)); */

// DOM BOM
// window                                                           document
// main container or global object                                    DOM is the child  of window object

/*   members like objects,functions or methods                          refer the document if objects/properties
 if they are part of window Object,                                     are to be used            
 then no need to refer them */

 // querySelectorAll returns the number of times the element is used

 // event listeners
//  1. using function
// 2. using event listeners->overriding does not occur 
// 3. simple inline - calling inside html 
// 4. inline - using element.onlick -> overriding occurs if 
// same id is used for different actions(executes bottom most function)



/* //2. using event listeners
const element = document.querySelector("#id");
element.addEventListener('click', ()=>{
    // what u want 2 do
}) */

// event_object.html

// mouse event->mouse_event.html

// input events ->input_events.html

// timing interval in javascript (timing_interval.html)
// window object allows execution of code at specified interval of time
// these timing interval is called timing events
// 2 timing events in javascript
// setTimeOut(function,milliseconds)->executes a function , 
// after waiting for a specified amount of time

// setInterval(function,milliseconds)->same as setTimeOut ,
//  executes the function continuously until a time interval




// OOPS in javascript
// object literal:-> object literal is  a key:value pair data structure.
// -> object:->storing variables and functions together in a container is called as objects

//ways of creating an object
/* // 1. 
let myDetails ={
    name:"Meghna",
    age:23,
    role:"Android Developer",
    getDetails:function(){
        console.log(`Name is ${myDetails.name}, age is ${myDetails.age} and role is ${myDetails.role}`);


    }


}
console.log(`name is ${myDetails.name}, age is ${myDetails.age} and role is ${myDetails.role}`);
myDetails.getDetails(); */


/* //2.
 let myDetails ={
    name:"Meghna",
    age:23,
    role:"Android Developer",
    getDetails(){
        console.log(`Name is ${myDetails.name}, age is ${myDetails.age} and role is ${myDetails.role}`);


    }


}
console.log(`name is ${myDetails.name}, age is ${myDetails.age} and role is ${myDetails.role}`);
myDetails.getDetails(); */


/* //3. object inside an object
let myDetails ={
    name:{
        firstName:"Meghna",
        lastName:"Balakrishna"
    },
    age:23,
    role:"Android Developer",
    getDetails:function(){
        console.log(`Name is ${myDetails.name}, age is ${myDetails.age} and role is ${myDetails.role}`);


    }


}
console.log(`name is ${myDetails.name}, age is ${myDetails.age} and role is ${myDetails.role}`);
myDetails.getDetails();
console.log( myDetails.name.firstName); */


// THIS->it contains the current context
// it can have different values depending on the where it is placed

/* var myName="Meghana";
function nameDetails(){
    console.log(this.myName);
}

nameDetails(); */

// when THIS is mentioned inside the object, it takes the property of the object
// else it gives the window object


/* let myDetails ={
    name:{
        firstName:"Meghna",
        lastName:"Balakrishna"
    },
    age:23,
    role:"Android Developer",
    getDetails(){
        console.log(this);


    }


}

myDetails.getDetails(); */

/* // THIS takes global value when used with the arrow function
let myDetails ={
    name:{
        firstName:"Meghna",
        lastName:"Balakrishna"
    },
    age:23,
    role:"Android Developer",
    getDetails:()=>{
        console.log(this);


    }


}

myDetails.getDetails(); */


/* let bioData={
    myName:{
      realName:  "Meghaa",
    channelName:"MEghana"
    },
    age:23,
    getData(){
        console.log(`My name is ${this.myName.channelName} and my age is ${this.age}`);
    }
}

bioData.getData(); */

// Destructuring->is unpacking values from arrays,properties from objects into distinct variables


// array destructuring
/* //traditional method
const myDetails=["Meghana","B",23,"Mysore"];
let myFname=myDetails[0];
let myLname=myDetails[1];
console.log(`My first Name is ${myFname} and my last name is ${myLname}`); */


//const myDetails=["Meghana","B",23,"Mysore"];
/* let [myFname,myLname,myCity] = myDetails;
console.log(`My first Name is ${myFname} and my last name is ${myLname}`);  */

// other method
/* let [myFname,myLname,myAge,myCity,myRole="Developer"] = myDetails;
console.log(`My first Name is ${myFname} and my last name is ${myLname} my role is ${myRole}`);  */


/* // object destructuring
const myDetails={
    firstName:"Meghana",
    lastName:"Balakrishna",
    age:23,
    role:"Developer"
}
let {firstName,lastName,age,role} = myDetails;
let myAge=myDetails.age;
console.log(myAge); */


/* // spread operator
const colors=['red','blue','yellow'];
const favColors=['red','blue','yellow','green','violet'];
const myColors=[...colors,'purple','orange'];

console.log(myColors); */



// REST operator
// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input paramters 
// in a function.
// The REST parameter syntax allows us to represent indefinite number of arguments as an array


// difference between arguments and parameters
// arguments->when function is called->the values passed are called the arguments
// parameters->while defining a functions, the values passed are called the parameters

// returns 3 as it takes arguments of 2 places only
//normal method
/* function sum(a,b){
    console.log(a+b);
}

sum(1,2,3,4,5); */

/* // using rest operator
function sum(...inputs){

    let total=0;
    for(let i of inputs){
        total+=i;
        

    }
    console.log(total);
}

sum(1,2,3,4,5); */


/* // example 2
function fun(a,b,...c){
    console.log(`${a},${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Eden'));
}

fun('Ronaldo','Neymar','Pele','Messi','Eden') */


// ECMAScript 2016/ES7
// 1. array.prototype.includes
//2. Exponential operator

/* //1.includes
const colors=['red','blue','yellow'];
let isPresent=colors.includes('red');
console.log(isPresent); */

/* //2. exponential
console.log(2**3); */


// ECMAScript 2017/ES8
// 1. String padding
//2. object.values()
//3. object.entries()


//1. padding padStart() and padEnd()
//let myAge="26".padEnd(10);
// console output
/* let myAge="26".padEnd(10);
undefined
myAge
"26        "
 */

 //2. object.value() -> returns values in the object
//  const person ={name:"Fred",age:78};
//  console.log(Object.values(person));
 // to get all the data in the object->example in key:value format
//  console.log(Object.entries(person));

// ASYNC WAIT ->pending

// ECMAScript 2018/ES9
// rest operator for objects also
/* const person ={name:"Fred",age:78};
const sPerson={...person}
console.log(sPerson); */


// ECMAScript 2019/ES10
/* //1.flat() method->by default it can flat only till level 1
const arr = [
    ['1','2'],
    ['3','4'],
    ['5','6'],
    ['7','8'],
    ['9','10',['11','12']]
];

console.log(arr.flat(Infinity)); */

/* //2. object->array->(Object.entries())
//    array->object -> Object.fromEntries

const person ={name:"Fred",age:78};
const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj)); */ 


// ECMAScript 2020
//1 BigInt->
/* let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
// any value exceeding oldNum value -> requires adding of n at the end
const newNum = 9007199254740991n+12n;
console.log(newNum);
console.log(typeof(newNum));
// this is called bigInt */


// falsy values in js->0,null,NaN,undefined,false

/* // NULLISH COALESCING(??)
// is a logical operator that returns the  left hand side operand when the right hand side operand is null 
// or undefined,otherwise returns the left hand side operand


const food=null ?? 'default string';
console.log(food); */


// ECMAScript 2014
// use strict 
/* "use strict"
x=10;
console.log(x); */


/* // without use strict
x=10.2;
console.log(x); */



// ADVANCED JAVASCRIPT
// Event Propogation->event bubbling and event capturing
// event propogation mode determines in which order the elements receive the event
// bottom to top ->bubbling phase
// top to bottom -> capturing phase

// bubbling and capturing are 2 ways of event propogation
//in dom api when an event occurs inside another event and both have events in them

// propogation is braodly classified into 3  main types
//capture phase -> going from the window object to the event target phase
// target phase -> it is the target phase
// bubble phase -> going from the event target parent to the window object  


// event bubbling -> the event is first captured  and handled by the innermost element and then propogated to outer elements
 
//capturing -> the event is first captured by the outermost element and propogated to the inner elements.
                // -> it is also called "trickling"

                // file -> capturing.html

// by default event propogation is bubbling

// in order to stop event propogation -> we need to use event.stopPropogation
// in order to make event propogate in capturing phase , in addEventListner add true




// HIGHER ORDER FUNCTION and CALLBACK FUNCTION