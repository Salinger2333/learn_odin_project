// console.log("hiiiiiiiiiiii")
// let name = "joey"
// let surname = 'zy'
// console.log(name);
// console.log(surname);


// const pi = 3.1415926

// console.log(pi);

// let $ = 1;
// let _ = 2;
// console.log($, _);

// console.log(_ ** 2);

// const myInt = 666
// const myFloat = 6.66

// let myNumer = '731'
// typeof myNumer
// myNumer = Number(myNumer) + 3
// console.log(myNumer);


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 

let arrayA = [1, 2, 3]
console.log(arrayA.toString());

let stringA = 'iam a good person'
let stringB = stringA.charAt(2)
console.log(stringB);
stringB = stringA.charCodeAt(2)
console.log(stringB);
stringB = stringA.codePointAt(2)
console.log(stringB);
stringB = stringA.at(-1)
console.log(stringB);
stringB = stringA[0]
console.log(stringB);


stringB = stringA.concat("new", "")


let a = 2
switch (a) {
    case 1:
        console.log("a is 1");
        break
    case 2:
        console.log("a is 2");
        break
    case 3:
        console.log("a is 3");
        break
    default:
        console.log("a is not 1,2,3");
        break
}
