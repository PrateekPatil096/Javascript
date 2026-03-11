const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);
const myHeroes=["toji","naruto"]

const myArr2=new Array(1,2,3,4)

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join
console.log(myArr);
console.log(newArr)
console.log(typeof newArr);

console.log("a",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("b",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("c",myArr);
