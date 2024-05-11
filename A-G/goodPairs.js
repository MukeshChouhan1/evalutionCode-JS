function goodPairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let n = 2 * arr[i];
      if (arr[j] == n && i != j) {
        count++;
      }
    }
  }
  console.log(count);
}

function runProgram(input) {
  var input = input.trim().split("\n");

  for (let i = 1; i < input[0] * 2; i++) {
    i++;
    let arr = input[i].trim().split(" ").map(Number);
    goodPairs(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
5
1 1 1 1 1
6
1 1 2 2 4 1 `);
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
