// function sumOfSubarr(arr = [1, 2, 1], k = 2) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let subArr = [];
//     for (let j = i; j < arr.length; j++) {
//       subArr.push(arr[j]);
//       let sum = subArr.reduce((a, b) => a + b, 0);

//       if (sum == k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// function runProgram(input) {
//   var input = input.trim().split("\n");
//   for (let i = 1; i < input[0] * 2; i++) {
//     let [size, k] = input[i++].trim().split(" ").map(Number);
//     let arr = input[i].trim().split(" ").map(Number);

//     console.log(sumOfSubarr(arr, k));
//   }
// }
// if (process.env.USERNAME === "Anurag") {
//   runProgram(`1
// 5 7
// 1 2 3 4 5`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
let arr = [5, 1, 2, 3, 4];
let k = 13;
let l = 0;
let r = arr.length - 1;
let count = 0;
while (l <= r) {
  let sum = arr[l] + arr[r];
  if (sum == k) {
    count++;
    l
    
  }
  if (sum > k) {
    r--;
  } else if (sum < k) {
    l++;
  }
}
console.log(count);
