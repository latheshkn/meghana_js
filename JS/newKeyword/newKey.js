var User = function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount =courseCount;

    this.getCourseCount= () => {
        console.log(`Course count is ${this.courseCount}`);
    }
};

User.prototype.getFirstName = function() {
    
    console.log(`First name is ${this.firstName}`);
}


var meghana =new User("meghna",9);
meghana.getCourseCount();
if(meghana.hasOwnProperty("firstName")){
    meghana.getFirstName();

}
// console.log(meghana);

var vikas = new User("Vikas",8);
vikas.getCourseCount();

// console.log(vikas);