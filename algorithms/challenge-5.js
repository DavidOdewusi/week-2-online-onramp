function arraySum(arr1, arr2) {
  let sumArr = [];
  let count = 0;

  for (let i = 0; i < arr2.length + 1; i++) {
    if (i === arr2.length) i = 0;

    for (let j = 0; j < arr1.length + 1; j++) {
      if (j === arr1.length) return sumArr;
      const add = arr2[count];
      sumArr.push(arr1[j] + add);
      count++;
      if (count === arr2.length) count = 0;
    }
  }
}
console.log(arraySum([1, 2, 4, 5, 6, 2, 1], [2, 3, 5]));
console.log(arraySum([10, 20, 30, 40, 50], [20, 40, 60]));

module.exports = arraySum;
