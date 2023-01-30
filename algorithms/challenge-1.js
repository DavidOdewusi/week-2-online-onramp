function missingNumber(numArr) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const maxNumArr = Math.max(...numArr);
  let missingNums = [];
  let presentMissin;
  let compare = 1;

  for (let i = 0; i < numArr.length; i++) {
    if (compare !== numArr[i]) {
      presentMissin = compare;
      let missinAfter = numArr[i] - compare;
      compare = numArr[i];
      for (let j = presentMissin; j < presentMissin + missinAfter; j++) {
        missingNums.push(j);
      }
    }
    compare++;
  }

  nums.forEach((e) => {
    if (maxNumArr === e) {
      const numsAfterHigh = nums.splice(nums[maxNumArr - 1]);
      missingNums.push(...numsAfterHigh);
    }
  });

  if (!missingNums.length) return false;
  else if (missingNums.length === 1) return missingNums[0];
  else return missingNums;
}
console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(missingNumber([2, 3, 4, 7]));
console.log(missingNumber([1, 4, 5, 7, 8]));
module.exports = missingNumber;

// missingNumber([1,2,3,4,6,7,8,9]) to return 5
// missingNumber([1,2,3,4,5,6,8]) to return [7, 9]
// missingNumber([1,2,3,4,5,6,7,8,9]) to return false
