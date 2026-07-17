const array = [1, 2, 3];

const max = Math.max([array]);

console.log(max); // NaN

const maxApply = Math.max.apply(null, array);
console.log(maxApply);
