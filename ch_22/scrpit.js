const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resloved value");
    },10000)
    
});

const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resloved value2");
    },5000)
    
});

async function handlePromise(){
    console.log("hello world")
    const val=await p1;
    console.log("namaste js")
    console.log(val);

    const val2=await p2;
    console.log("namaste js2");
    console.log(val2);


}
    handlePromise();
