function numSwap(number) {
  const numStrArr = String(number).split("");
  let secondDigit;
  let count = 1;
  for (let i = 0; i < numStrArr.length; i++) {
    if (count === 1) {
      secondDigit = numStrArr[i];
      numStrArr[i] = numStrArr[i + 1];
      numStrArr[i + 1] = secondDigit;
    }
    count++;
    if (count === 3) count = 1;
  }

  return Number(numStrArr.join(""));
}
console.log(numSwap(1234));
console.log(numSwap(432156));

module.exports = numSwap;
