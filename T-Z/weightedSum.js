function weightedSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + (i + 1) * arr[i];
  }
  console.log(sum);
}

function runProgram(input) {
  var input = input.trim().split("\n");

  for (let i = 1; i < input[0] * 2; i++) {
    i++;
    let arr = input[i].trim().split(" ").map(Number);
    weightedSum(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
5
1 2 3 4 5
2
100 1`);
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
