let a = 123;
let b = "hello";
let c = true;
let d;
let e = null;

const arr1 = [a, b, c, d, e];

arr1.forEach((item) => {
  console.log(typeof item);
});

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("Alice", "X");
const player2 = new Player("Bob", "O");

player1.sayName();
player2.sayName();

console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(player1.__proto__ === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);
console.log(Player.prototype);
