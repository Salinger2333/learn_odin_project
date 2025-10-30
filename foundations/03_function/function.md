function myFunction() {
  alert("hello");
}
myFunction();
// calls the function once
注意：这种创建函数的方式也称为函数声明（function declaration）。它总是会被提升（hoisted），因此你可以在函数定义之前调用该函数，并且它能正常工作。


如果你正在编写一个函数并希望支持可选参数，可以通过在参数名称后添加 ` = `，后跟默认值的方式来指定默认值：

function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}


你也可以创建一个没有名称的函数：
(function () {
  alert("hello");
});
在JavaScript中，括号 (Grouping Operator) 的一个重要作用就是将它内部的代码强制当作一个表达式来解析。

当解析器看到 ( 时，它就知道接下来是一个表达式，而不是一个声明。既然是表达式，那么里面的匿名函数就是合法的，因为它不再被当作需要名字的“函数声明”，而是被当作一个会返回函数对象的“函数表达式”。

立即调用函数表达式 (Immediately Invoked Function Expression, IIFE)。(function () {
  alert("hello, I run immediately!");
})(); // 注意末尾多了一对括号
这里有两对括号，它们的作用完全不同：

第一对括号 (function(){...}):
作用：将函数从“声明”变成“表达式”。
结果：返回一个函数对象。

第二对括号 ():
作用：这是函数的调用操作符，立即执行前面表达式返回的函数。
结果：函数体内的代码被执行。

IIFE 的主要好处：创建独立的作用域
这种写法的最大好处是创建一个私有作用域。在 () 内部声明的任何变量都不会污染到全局作用域

(function () {
  var myName = "Alice"; // 这个变量只在这个函数内部可见
  console.log("Hello, " + myName);
})();

// 在函数外部，访问不到 myName
// console.log(myName); // 会报错: myName is not defined


如果我们希望返回的表达式跨越多行，我们应该从与 return 相同的行开始。或者至少将开头的括号放在那里，如下所示：

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )



  ## var和let
  https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope)
  主要区别在于作用域规则。用 var 关键字声明的变量的作用域是其直接所在的函数体（因此是函数作用域），而 let 变量的作用域是其直接所在的块（由 { } 表示）（因此是块作用域）。

function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run();