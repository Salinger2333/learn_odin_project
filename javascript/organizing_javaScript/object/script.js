function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? 'read yet' : 'not read yet'
    this.info = function () {
        return this.title + ' by ' + this.author + ',' + this.pages + ' pages ,' + this.read
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 0)
console.log(theHobbit.info());

function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(`hi,my name is ${this.name}`);
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
Player.prototype.getMarker = function () {
    console.log(`my mark is ${this.marker}`);
}
console.table(Object.getPrototypeOf(Player.prototype))
Object.setPrototypeOf(Player.prototype, Person.prototype)
console.table(Object.getPrototypeOf(Player.prototype))

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');


player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'

// Player.prototype.sayHi = function () {
//     console.log(this.name + ', hi!');
// }

// player1.sayHi()
// player2.sayHi()

// console.log(Object.getPrototypeOf(player1) === Player.prototype);
// console.log(player1.hasOwnProperty('valueOf'));
// console.log(Object.prototype);