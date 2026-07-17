const str = "alksdj";
const num = 123;
const boo = true;
const udf = undefined;
const n = null;
const arr = [1, 2, 3];
const obj = { test: "test" };

const typeList = [str, num, boo, udf, n, arr, obj];

const getRealType = (item) => {
  if (item === null) {
    return "null";
  } else if (Array.isArray(item)) {
    return "array";
  } else {
    return typeof item;
  }
};

typeList.forEach((item) => {
  console.log(`value:${item},type:${getRealType(item)}`);
});
