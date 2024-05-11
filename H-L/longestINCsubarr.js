function lIC(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = i + 1; j < arr.length; j++) {
      str += arr[j];
      console.log(str);
    }
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    i++;
    let arr = input[i].split(" ").map(Number);
    lIC(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
2
1 1
6
1 2 1 2 3 1
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
