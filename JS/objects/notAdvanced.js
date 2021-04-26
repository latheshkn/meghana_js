var User = {
    userName : "",
    getUserName : function()  {
        console.log(`User name is ${this.userName}`);
    },
};

var user_name = Object.create(User);
user_name.userName="Meghana Balakrishna";
user_name.getUserName();