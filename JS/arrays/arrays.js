var countries = ["India","Sri Lanka","Myanmar","Bangladesh"];

var states = new Array("Karnataka","Kerala","Tamil Nadu","Telangana");

// accessing array element
console.log(states[1]);

// length of an array
console.log(states.length);

// add or replace element in an array
states[4]= "Rajastan";

console.log(states);

// remove value from the end of the array
states.pop();
console.log(states);


// add value to the beginning of an array
states.unshift("Andhra Pradesh");
console.log(states);

// remove first value from the array
states.shift();
console.log(states);

// find the value's position, returns -1 if value is not present

console.log(states.indexOf("Karnataka"));

// convert anything into array

console.log(Array.from("Meghana"));     
