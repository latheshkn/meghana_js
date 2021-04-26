var getUserRole =function(name,role){


    switch (role) {
        case "admin":
           return `${name},${role}`;
            
    
        case "subadmin":
            return `${name},${role}`;

        case "testprep":
            return `${name},${role}`;

        case "user":
            return `${name},${role}`;

    
        default:
            return `${name},${role}`;
    }
}


var userRole= getUserRole("Meghana","admin");
console.log("user Role is: "+userRole);