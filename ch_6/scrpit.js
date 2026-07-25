function a(){
    console.log(b);
}
var b=10;
a();

function x(){
    c();
    function c(){
        console.log(z);

    }
}
var z=10;
x();
var h =0
 function u(){
    h =2
    v()
    function v(){
        p()
        h=3
        
        function p(){
            console.log(h)
        }
    }
 }
 u();