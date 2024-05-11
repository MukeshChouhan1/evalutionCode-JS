function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i <= input[0] ; i++) {
    let [a, b] = input[i].split(" ").map(Number);

    if (a == b) {
      console.log("Possible");
    } else {
      console.log("Not Possible");
    }
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4
6 242
3 3
6 3
10 30`);
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
