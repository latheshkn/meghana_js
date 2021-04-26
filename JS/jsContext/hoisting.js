// Hoisting is JavaScript's default behavior of moving all declarations
//  to the top of the current scope
tipper("1");


function tipper(b){
    var biller = parseInt(b);
    console.log(biller+5);
}

// bigTipper("200");

var bigTipper =function (b){
    var biller = parseInt(b);
    console.log(biller+15);
}

bigTipper("200");

