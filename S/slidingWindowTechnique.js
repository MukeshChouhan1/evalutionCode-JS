// Applying sliding window technique :

// We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable window_sum.
// Then we will graze linearly over the array till it reaches the end and simultaneously keep track of maximum sum.
// To get the current sum of block of k elements just subtract the first element from the previous block and add the last element of the current block .

let arr = [2,6,4,3,6,8,9];
let k = 20;

let window_sum = 0;
let maxSum = 0;
for (let i = 0; i < k; i++) {
  window_sum += arr[i];
}
for (let i = k; i < arr.length; i++) {
  let dif = arr[i] - arr[i - k];
  window_sum += dif;
  if (window_sum > maxSum) {
    maxSum = window_sum;
  }
  
    console.log(maxSum)
  
}
console.log(maxSum);
