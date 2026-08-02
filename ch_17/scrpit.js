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

    const outp=arr.reduce(function(max, curr){
        if(curr>max){
            max=curr;
        }
        return max;
    }, 0);

    console.log(outp);

    const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const oo=users.map((x)=>x.firstName+x.lastName);

console.log(oo)

const pp=users.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(pp)

const oopp=users.filter((x)=>x.age<30).map((x)=>x.firstName)
console.log(oopp);

const ppa=users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(ppa);