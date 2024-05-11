// let arr = [7, 3, 4, 6, 5, 2, 8, 9, 10];

// let stack = [];
function middleElement(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] > arr[i]) {
      return arr[i];
    }
  }
  return -1;
}

function runProgram(input) {
  var input = input.split("\n");
  let arr = input[1].split(" ").map(Number);
  console.log(middleElement(arr));
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`5
4 3 6 7 8`);
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
