function a(){
    console.log(b);
}
var b=10;
a();

function x(){
    c();
    function c(){
        console.log(b);

    }
}
var b=10;
a();