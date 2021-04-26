// show user a logout button if already logged in 
// else show him loh=gin / signup

var authentication = true;
/*  if(authentication){
     console.log("Show signout");
 }else{
     console.log("show login");
 }
 */


 authentication ? console.log("Show signout"): console.log("show login");