function combinations(arr) {
}
function runProgram(input) {
  let [n, k] = input.split(" ").map(Number);
  let items = [];
  for (let i = 1; i <= n; i++) {
    items.push(i);
  }
  
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4 2`);
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
