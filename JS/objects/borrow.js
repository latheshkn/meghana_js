var user = {
    firstName: "Meghana",
    lastName : "B",
    age: 23,
    role: "Android developer",

    getInformation: function(){
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        age is ${this.age}
        role is ${this.role}
        `);

    },
};



var vikas ={
    firstName: "Vikas",
    lastName : "R",
    age: 26,
    role: "Android developer"
}


let vikasInfo = user.getInformation.bind(vikas)
// bind gives back the reference
vikasInfo();