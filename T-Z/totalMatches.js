function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i <= input[0]; i++) {

    let n = +input[i];
    console.log(n - 1);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
2
3`);
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
