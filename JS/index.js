const phone=7879;
// phone=454545;
console.log(phone)

let myName = "Meghana";
console.log(myName);

// primitive or value types:
// String, number , boolean , undefined and null

//reference types:
// objects ,arrays,functions


// languages

// statically typed -> type cannot be changed during run time
// dynamically typed -> type can be changed during run time

// objects
let person ={
    firstName:"Local",
    age: 30
}

// access a property using dot
person.firstName="Meghana";

// accessing a property using brackets

person['firstName']="Mary";
console.log(person)

// Arrays
// arrays are also dynamic type

let selectedBooks =["1Q84","Norwegian Wood"];
selectedBooks[2] = "Kafka on the shore";
selectedBooks[3]=200;
console.log(selectedBooks);
console.log(selectedBooks[0]);
console.log(selectedBooks.length);


// functions      parameter
function greet(userName){
    console.log("Hello "+userName)
    
}

function square(number){
    squareNumber = number*number;
    return squareNumber;
}

greet("John");
    // argument

   let numbers= square(10);
   console.log("Square of a number is: "+numbers);
