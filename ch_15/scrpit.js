/*console.log("start");

setTimeout(function (){
    console.log("callback")
},5000);

console.log("end");

let startdate=new Date().getTime();
let enddate=startdate;

while(enddate<startdate+10000){
    enddate=new Date().getTime();
}
console.log("while expires");*/

console.log("start");

function cb(){
    console.log("callback");
}
setTimeout(cb,0);

console.log("end")