# Challenge 1

Implement the function missingNumber(numArr) which returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false. If there is more than one missing number, the function should return the result in an array sorted in ascending order.

## Examples

missingNumber([1,2,3,4,6,7,8,9]) to return 5  
missingNumber([1,2,3,4,5,6,8]) to return [7, 9]  
missingNumber([1,2,3,4,5,6,7,8,9]) to return false

# Challenge 2

Implement the function numSwap(number) which takes a number of even length, swaps pairs of its adjacent digits and returns the swapped number.

## Examples

numSwap(1234) to return 2143  
numSwap(432156) to return 341265

# Challenge 3

Implement the function increment(arr, value) which increments the value of val key in every object inside the array by the given value and returns the new array

## Examples

increment([{ val: 1 }, { val: 2}, { val: 3 }], 2) to return [{ val: 3 }, { val: 4 }, { val: 5 }]  
increment([{ val: 10 }, { val: 20}, { val: 30 }], 5) to return [{val: 15 }, { val: 25 }, { val: 35 }]

# Challenge 4

An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible.

Implement the function withdraw(amount) that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.

## Examples

withdraw(250) to return [2,1,0]  
withdraw(370) to return [3,1,1]

# Challenge 5

Implement the function arraySum(arr1, arr2) that takes two arrays as arguments and returns an array of the sum of the values in the first array with the values in the second array in repeating order.

## Examples

arraySum([1,2,4,5,6,2,1], [2,3,5]) to return [3,5,9,7,9,7,3]  
arraySum([10,20,30,40,50], [20,40,60]) to return [30,60,90,60,90]
