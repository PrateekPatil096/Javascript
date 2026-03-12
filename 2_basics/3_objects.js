const JsUser= {
    name:"toji",
    "full name":"toji zenin",
    age:19,
    location:"tokyo",
    email:"pp@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])

JsUser.email="ppp@gamil.com"
//Object.freeze(JsUser)
JsUser.email="pmp@micro.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello JsUser");

}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log('hello js user ,${this.name}');

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
