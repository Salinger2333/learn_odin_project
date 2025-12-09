let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function recursiveSum(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => {
      return (prev += current.salary);
    }, 0);
  } else {
    let sum = 0;
    for (let subDep of Object.values(department)) {
      console.log(subDep);
      sum += recursiveSum(subDep);
    }
    return sum
  }
  
}
console.log(recursiveSum(company));
