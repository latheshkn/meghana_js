var myName = "Meghana";
console.log(`Line 2 ${myName}`);

firstFunc();

function firstFunc(){
    var myName = "Lathesh";
    console.log(`Line 8 ${myName}`);
    secondFunc();

    function secondFunc(){
        var myName = "Vikas";
        console.log(`Line 13 ${myName}`);
    }
}

