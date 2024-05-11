function runProgram(input) {
  var input = input.trim().split("\n");
  let Odd = [];
  let Even = [];
  let arr = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      Odd.push(arr[i]);
    } else if (arr[i] % 2 == 0) {
      Even.push(arr[i]);
    } else {
      return "Even";
    }
  }
  Even.reduce((a, b) => a + b, 0);
  Odd.reduce((a, b) => a + b, 0);
  if (Even > Odd) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4
1 2 3 4`);
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
