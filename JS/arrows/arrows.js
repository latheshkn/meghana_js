var  checkEven=(number) =>{
//     if(number % 2 === 0){
//         return true;
//     }

//     return false;
return number%2===0;
// }
}



/* var userNum=checkEven(21);
console.log(userNum); */

/* var arrayCheck = [2,4,5,6,7].every(checkEven);
console.log(arrayCheck); */


// writing a callback

var arrayCheck =[2,4,6,8].every((num) => {
    return num%2===0;
});

console.log(arrayCheck);

// if return is not required
var arrayCheck =[2,4,6,8].every((num) => ( num%2===0)
);

console.log(arrayCheck);