const p=new Promise((resolve, reject)=>{
    resolve("promise resloved value");
});

async function handlePromise(){
    const val=await p;
    console.log(val);
}
    handlePromise();
