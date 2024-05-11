// // Time Complexity=O(logn)

// function lastOccurance(arr, target, ans) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);
//     if (arr[mid] == target) {
//       ans = mid;
//       low = mid + 1;
//     } else if (arr[mid] > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return ans;
// }
// function firstOccurance(arr, target, ans) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);
//     if (arr[mid] == target) {
//       ans = mid;
//       high = mid - 1;
//     } else if (arr[mid] > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return ans;
// }

// function runProgram(input) {
//   var input = input.trim().split("\n");
//   let arr = input[1].trim().split(" ").map(Number);
//   let target = +input[2];
//   let count = 0;
//   let first;
//   let last;
//   first = firstOccurance(arr, target, -1);
//   last = lastOccurance(arr, target, -1);
//   count = lastOccurance(arr, target, -1) - firstOccurance(arr, target, -1) + 1;
//   if (first == -1 && last == -1) {
//     count = 0;
//   }

//   console.log(first, last, count);
// }
// if (process.env.USERNAME === "Anurag") {
//   runProgram(`6
// 2 2 3 4 5 6
// 0`);
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

