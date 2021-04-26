const states = ["Karnataka","TN","Kerala",1947,"Maharashtra","AP"];
/* for (let index = 0; index < states.length; index++) {

    if(typeof states[index] !=="string") continue;
    const element = states[index];
    console.log(element);
    
} */

/* let index = 0;
while(index<states.length){
    console.log(states[index]);
    index++;
} */


/* let index = 0;
do {

console.log(states[index]);
index++;
}while(index<states.length)
 */

/* let i=0;

for(;;){
    if(i>3) break;
    console.log(i);
    i++;
} */

states.forEach((s)=> (console.log(s)));

// for of loop is used for arrays
// for in loop is used for objects

for (const n of states){
    console.log(n);
}

const sites = {
    ig: "Instagram",
    n:"Netflix",
    fb:"Facebook",
    yt:"Youtube"
}

for(const n in sites){
    console.log(n);
    console.log(sites[n]);
}