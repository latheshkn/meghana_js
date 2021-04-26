// slicing
// 0 => starting index
// 2  => ending index
let namess = ["Meghana","Vikas","Lathesh","Pankaj","Nadir"];
console.log(namess.slice(0,2));

// console.log(names.slice(namess.length - 2));

// splicing
// 1 => starting index
// 3=> Count '3' places
// replace those places with "Archana"
let names = ["Meghana","Vikas","Lathesh","Pankaj","Nadir"];
// names.splice(1,3,"Archana");
names.splice(1,3,"Archana","Yashas");
console.log(names);