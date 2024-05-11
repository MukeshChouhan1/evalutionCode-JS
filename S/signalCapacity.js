function signalCapacity(arr = [3, 5, 0, 9, 8]) {
  let stack = [0];
  let res = [1];
  for (let i = 1; i < arr.length; i++) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      res.push(i + 1);
    } else {
      res.push(i - stack[stack.length - 1]);
    }
    stack.push(i);
  }
  console.log(res.join(" "));
}
function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let size = +input[i++];
    let arr = input[i].split(" ").map(Number);
    signalCapacity(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
    7
    100 80 60 70 60 75 85
5
3 5 0 9 8`);
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
