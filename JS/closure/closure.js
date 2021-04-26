function init(){
    let firstName = "Meghana";

    function getFullName(){
        console.log(firstName);
    }

    return getFullName;
}


var calling = init();
calling();