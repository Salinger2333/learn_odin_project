{
  function sumRange(n) {
    if (n == 1) {
      return 1;
    } else {
      return n + sumRange(n - 1);
    }
  }
  // console.log(sumRange(3));
}

{
  function power(base, expo) {
    if (expo == 0) {
      return 1;
    } else {
      return base * power(base, expo - 1);
    }
  }
  console.log(power(2, 4)); // 16
  console.log(power(2, 3)); // 8
  console.log(power(2, 2)); // 4
  console.log(power(2, 1)); // 2
  console.log(power(2, 0)); // 1
}

{
  function fatorial(n) {
    if (n == 1) return 1;
    else {
      return n * fatorial(n - 1);
    }
  }
  console.log(fatorial(5));
}

{
  function all(arr, cb) {
    let copy = arr.slice();
    if (copy[0] === undefined) {
      return true;
    }
    if (cb(copy[0])) {
      copy.shift();
      return all(copy, cb);
    } else {
      return false;
    }
  }

  const allAreLessThanSeven = all([1, 2, 5], function (num) {
    return num < 7;
  });

  console.log(allAreLessThanSeven);
}

{
  function productOfArray(arr) {
    let copy = arr.slice();
    if (arr.length === 0) {
      return 1;
    }
    return copy[0] * productOfArray(copy.slice(1));
  }
  console.log(productOfArray([1, 2, 3, 10]));
}

{
  var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: "foo2",
            },
            moreMoreStuff: {
              magicNumber: 77,
              something: "foo3",
            },
          },
        },
      },
    },
  };
  // bad solution
  // cant find data in the secound property
  // function contains(obj, value) {
  //   for (let key in obj) {
  //     if (typeof obj[key] === "object") {
  //       return contains(obj[key], value);
  //     }
  //     if (obj[key] === value) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  function contains(obj, searchValue) {
    if (typeof obj !== "object" || obj === null) {
      return obj === searchValue;
    }
    for (let value of Object.values(obj)) {
      if (contains(value, searchValue)) return true;
    }
    return false;
  }

  let hasIt = contains(nestedObject, 77); // true
  let doesntHaveIt = contains(nestedObject, "foo"); // false
  console.log(hasIt, doesntHaveIt);
}

{
  // no rescursive version
  // function totalIntegers(arr) {
  //   return arr.flat(Infinity).filter((value) => typeof value === "number").length;
  // }
  function totalIntegers(arr) {
    let total = 0;
    for (let value of arr) {
      if (typeof value === "number") {
        total++;
      } else if(Array.isArray(value)){
        total = total + totalIntegers(value)
      }
    }
    return total
  }
  console.log(totalIntegers([[[5], 3], 0, 2, [1], ["foo"], [], [4, [5, 6]]]));
}
