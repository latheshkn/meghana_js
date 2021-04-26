var count = document.querySelector(".header")
var counter = document.querySelector(".para")
/* console.log(count);
console.log(count.innerHTML); */

var index =1;
 
setInterval(() =>{

    if(index<1000){
        index++;
        count.innerHTML=index;
    }
   
},1)


setTimeout(() => {
    counter.innerHTML = "Order Today";
},3000)
