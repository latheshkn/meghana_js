// Context -> global context and execution context
// execution context -> variable objects, scope chain , this
// Function declarations are scanned and made available
// Variable declarations are scanned and made undefined
var myName = "Meghana";

if(myName === window.myName){
    console.log("true");
}else{
    console.log("window is only used for browers not nodejs");
}