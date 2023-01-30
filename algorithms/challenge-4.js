function withdraw(amount) {
  let dispensableBill = [];

  const numOfHundred = Math.floor(amount / 100);
  const numOfFifty = Math.floor((amount - numOfHundred * 100) / 50);
  const numofTwenty = Math.floor(
    (amount - numOfHundred * 100 - numOfFifty * 50) / 20
  );

  dispensableBill.push(numOfHundred, numOfFifty, numofTwenty);

  return dispensableBill;
}

console.log(withdraw(250));
console.log(withdraw(1580));
module.exports = withdraw;
