const name="prateek"
const repocount= "10"
console.log(name+repocount+"value");
console.log('hello my name is ${name} and my repo count is ${repocount}');

const gameName=new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   prateek   "
console.log(newStringOne);
console.log(newString.trim());

const url="https://parteek.com/prateek%20patil"
console.log(url.replace('%20','-'))

console.log(url.includes('prateek'))

const newName=new String('prateek-mp-com')
console.log(newName.split('-'));