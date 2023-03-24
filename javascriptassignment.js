const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Iterate through each element in the array
for (let i = 0; i < numbers.length; i++) {
  // If the element is divisible by 3, print it to the console
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i]);
  }
}