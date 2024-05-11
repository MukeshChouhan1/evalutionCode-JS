function goodSum(arr) {
    let sum = 0;
    let left = 0;
    let ans = 0;
    
}
function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let [size, k] = input[i++].trim().split(" ").map(Number);
    let arr = input[i].trim().split(" ").map(Number);
    console.log(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`1
7 20
2 6 4 3 6 8 9
`);
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
