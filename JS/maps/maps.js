var newMaps = new Map();

newMaps.set(0,"Zero");
newMaps.set(1,"One");
newMaps.set(2,"Two");
newMaps.set(3,"Three");

// for of gives the keys first 
// for of gives the values first
console.log(newMaps);

for(keys of newMaps.keys()){
    console.log(`Key is ${keys}`);
}


for(values of newMaps.values()){
    console.log(`value is ${values}`);
}


for([key,value] of newMaps){
    console.log(`Key  is ${key} and value is ${value}`);
}