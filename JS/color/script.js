var red=document.querySelector(".red");
var cyan=document.querySelector(".cyan");
var violet=document.querySelector(".violet");
var orange=document.querySelector(".orange");
var pink=document.querySelector(".pink");
var center=document.querySelector(".center");

// window.getComputedStyle(red).backgroundColor;
// console.log(window.getComputedStyle(red).backgroundColor);

var getBgColor = (selectorColor) => {
   return window.getComputedStyle(selectorColor).backgroundColor;
};

// var colorSet= getBgColor(orange);



const colorChange = (selectorColor,colorSet) => {
 return   red.addEventListener('mouseenter',() => {
        center.style.background = colorSet; 
    
    });
    
}


colorChange(red,getBgColor(red));

