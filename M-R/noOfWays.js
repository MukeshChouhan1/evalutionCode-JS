function noOfWays(n) {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return noOfWays(n - 1) + noOfWays(n - 2) + noOfWays(n - 3);
}
function runProgram(input) {
  var input = +input;
  console.log(noOfWays(input));
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4`);
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
