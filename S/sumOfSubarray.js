// intutions:--
// Optimized:-

// Time Complexity - O(n);
// space - O(n)

function sumOfSubarr(arr = [1, 2, 1], k = 2) {
  let sum = 0;
  let obj = {};
  obj[0] = 1;

  let count = 0;
  let prevSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    prevSum += Math.abs(sum - k);
    if (prevSum > k) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
  return "No";
}

function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let [size, k] = input[i++].trim().split(" ").map(Number);
    let arr = input[i].trim().split(" ").map(Number);
    console.log(sumOfSubarr(arr, k));
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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
