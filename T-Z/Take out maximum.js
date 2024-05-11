

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let max=0
  for (let i = 0; i < k; i++){
    max+=arr[i]
  }
    let sum = max;
  for (let i = k; i < n; i++){
sum+=(arr[i]-arr[i-k])
    max=Math.max(sum,max)
  }
  console.log(max);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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
