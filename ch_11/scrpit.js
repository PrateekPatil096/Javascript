function outest(){
    var c=100;

    function outer(b){

        function inner(){
            console.log(a,b,c);
        }
        let a=10;
        return inner;
    }
    return outer;
}
let a=100;
var close=(outest())("hello");
close();



function counter(){
    var count=0;

    return function incrementcounter(){
        count++;
        console.log(count);
    }
}
var counter1=counter();
counter1();
counter1();

 var counter2=counter();
 counter2();