const tinderUser={}
console.log(tinderUser);

tinderUser.id="123pp"
tinderUser.name="toji"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"some@gamil.com",
    fullname:{
        userFullName:{
            firstname:"toji",
            lastname:"zenin"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
console.log(obj3);

obj4=Object.assign({},obj1,obj2)
console.log(obj4);

obj5={...obj1,...obj2}
console.log(obj5);

const users=[
    {
        id:1,
        email:"h@gamil.com"
    },{
        id:1,
        email:"h@gamil.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));