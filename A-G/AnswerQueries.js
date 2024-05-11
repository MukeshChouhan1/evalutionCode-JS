function runProgram(input) {
  var input = input.split("\n");
  let arr = input[1].split(" ").map(Number);

  let queries = +input[2];
  let count = 0;
  let querieArr = input[3].split(" ").map(Number);
    let left=
    for (let i = 0; i < queries.length; i++) {
        
    }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
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
