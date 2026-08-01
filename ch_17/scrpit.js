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