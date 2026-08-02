const arr=[5,1,3,2,6];

function double(x){
    return x*2;
}

const output=arr.map(double);

console.log(output);

const out = arr.map((y)=>{
     return y.toString(2);
    });

    console.log(out);

    function greaterthan4(x){
        return x>4;
    }

    const outt=arr.filter(greaterthan4);
    console.log(outt);

    const oupu=arr.filter((x) => x > 4);
    console.log(oupu);

    const op=arr.reduce(function (acc, curr){
        acc=acc+curr;
        return acc;
    },0);

    console.log(op);