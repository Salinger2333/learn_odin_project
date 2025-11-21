// let userTest = {
//     name: 'yi',
//     surname: 'chou',
//     get fullName() {
//         return `i'm ${this.name} ${this.surname}`
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ')
//     }
// }
// userTest.fullName = 'Wes Bos'
// console.log(userTest.fullName); 

// for (const key in userTest) {
//     if (!Object.hasOwn(userTest, key)) continue;
//     console.log(key);
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     sayHi(){
//         console.log(this.name);
//     }
// }
// let user1 = new User('yi')
// user1.sayHi()


// const User2 = function(name){
//     this.name =  name
// }
// User2.prototype.sayHi = function(){
//     console.log(this.name);
// }
// let user2 = new User2('yi')
// user2.sayHi()
// console.log(User == User2);

class User {
    #age = 23
    constructor(name) {
        this.name = name
    }
    sayHi = () => {
        console.log(`Hi, im ${this.name}`);
    }
    sayAge = () => {
        console.log(#age);
    }
}
let user = new User('yi')
setTimeout(user.sayHi, 1000)
setTimeout(user.sayAge, 1000)

