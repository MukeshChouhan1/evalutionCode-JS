function runProgram(input) {
  var input = input.trim().split("\n");

  let stack = [];
  for (let i = 1; i <= input[0]; i++) {
    let n = input[i].trim().split(" ");

    if (n[0] === "PUSH") {
      stack.push(Number(n[1]));
    } else if (n[0] == "MIN") {
      if (stack.length > 0) {
        let min = stack[0];
        for (let j = 0; j < stack.length; j++) {
          if (stack[j] < min) {
            min = stack[j];
          }
        }
        console.log(min);
      } else {
        console.log("EMPTY");
      }
    } else if (n[0] == "POP") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        console.log("EMPTY");
      }
    }
  }
  // console.log(twoD);
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`);
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
