function solution(arr, x) {
  arr.sort((a, b) => a - b);
  let closestSum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 2; i++) {
    let ptr1 = i + 1,
      ptr2 = arr.length - 1;
    while (ptr1 < ptr2) {
      let sum = arr[i] + arr[ptr1] + arr[ptr2];

      if (Math.abs( x - sum) < Math.abs( x - closestSum)) {
        closestSum = sum;
      }

      if (sum > x) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
  }

  if (closestSum == Number.MAX_SAFE_INTEGER) {
    return 0;
  }
  return closestSum;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(solution(arr, k));
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
4 1
-1 2 1 -4           
3 1
0 0 0`);
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
