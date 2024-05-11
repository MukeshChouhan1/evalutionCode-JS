function findSuchPairs(arr, k) {
  var left = 0;
  var sum = 0;
  var right = arr.length - 1;
  let count = 0;
  while (left <= right) {
    sum = arr[left] + arr[right];
    if (sum == k) {
      count++;
      return count;
    } else if (sum > k) {
      right--;
    } else {
      left++;
    }
  }
  return "-1";
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var testCases = +input[0];
  for (let i = 1; i < testCases * 2; i++) {
    let [size, K] = input[i++].split(" ").map(Number);
    let arr = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    console.log(findSuchPairs(arr, K));
  }
}

if (process.env.USERNAME === "Anurag") {
  runProgram(`1
5 2
3 4 0 2 7`);
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
