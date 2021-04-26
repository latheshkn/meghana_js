// part 1 of this keyword

/* var myName="Meghana";
console.log(`${myName}`);
console.log(this); */

// this gives access to global context
// in node it gives an empty data 
// in brower it returns the window object

// for all regular function calls, this points to the window object


console.log(this);
var user = {
    firstName:"Meghana",
    age: 24,
    getYear : function(){
        console.log("19",this);

        function hello(){
            console.log("hello");
            console.log("23",this);
        }

        hello();


    },
};

user.getYear();