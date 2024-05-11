// Brute Force Solution:----
//   for (let i = 1; i < arr.length - 1; i++) {
//     let left = arr[i];

//     for (let j = 0; j < i; j++) {
//       left = Math.max(left, arr[j]);
//     }
//     let right = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       right = Math.max(right, arr[j]);
//     }
//     sum += Math.min(left, right) - arr[i];
//   }

//   Time Complexity:---- O(n2);
// space - O(1)

// optimized Solution: -
//     Time Complexiy - O(n);
//     Space Complexity - O(n)

function rainWater(arr) {
  let sum = 0;

  let left = new Array(arr.length);
  let right = new Array(arr.length);
  left[0] = arr[0];
  right[arr.length - 1] = arr[arr.length - 1];
  for (let i = 1; i < arr.length; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }
  //   console.log(left, right);
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(left[i], right[i]) - arr[i];
  }
  console.log(sum);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    i++;
    let arr = input[i].trim().split(" ").map(Number);
    rainWater(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
