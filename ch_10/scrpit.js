/*function x(){
    var i=1;
    setTimeout(function (){
        console.log(i);
    },3000 );
    console.log("namaste js");
}
x();*/

function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("namaste js");
}
x();