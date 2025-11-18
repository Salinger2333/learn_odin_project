if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);// 使用var没有错误,因为{}没有为var创建作用域

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();



const name = "Bob";
const age = 28;
const color = "red";

console.log({
  name,
  age,
  color
});

const obj = { a: 1, b: 2 }
const {a} = obj
console.log(a);