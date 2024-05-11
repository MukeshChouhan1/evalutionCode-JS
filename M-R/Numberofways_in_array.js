var count = 0;
function ways(arr, num) {
  if (num < 0) {
    return 0;
  }
  if (num === 0) count++;

  for (let i = 0; i < arr.length; i++) {
    ways(arr, num - arr[i]);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let dim = input[0].trim().split(" ").map(Number);
  let k = +dim[0];
  let n = +dim[1];
  let arr = input[1].trim().split(" ").map(Number);

  ways(arr, k);
  console.log(count);
}

if (process.env.USER === "madandev") {
  runProgram(`3 3
1 2 3`);
  // runProgram(`4 4\n1 2 3 4`);
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

