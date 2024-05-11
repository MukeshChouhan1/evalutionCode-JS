function filterUnique(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let temp = arr[0];
  for (let i = 1; i < sorted.length; i++) {
    temp = temp ^ arr[i];
  }
  console.log(temp);
}
function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let size = input[i++];
    let arr = input[i].trim().split(" ").map(Number);
    filterUnique(arr);
  }
}
if (process.env.USERNAME === "5 \n 3") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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
