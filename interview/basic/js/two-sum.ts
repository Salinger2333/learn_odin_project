const array = [1, 3, 10, 11, 13];

const twoSum = (arr: Array<number>, goal: number) => {
  const mapOfIndex: Record<number, number> = {};
  const returnIndex = [];

  // 一个对象，key为数组的每个value
  for (let i = 0; i <= arr.length - 1; i++) {
    const val = arr[i]!;
    mapOfIndex[val] = i;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    const val = arr[i]!;
    const diff = goal - val;
    if (mapOfIndex[diff] !== undefined && mapOfIndex[diff] !== i) {
      returnIndex.push(i);
      returnIndex.push(mapOfIndex[diff]);
    }
  }
  const returnSet = new Set();
  returnIndex.map((index) => {
    returnSet.add(index);
  });
  return returnSet;
};

console.log(twoSum(array, 13));
