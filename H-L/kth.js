function kth(n, k) {
  let i = 1;

  i = i << k;
  let res = n & i;
  if (res == 0) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}

function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input.length; i++) {
    let [n, k] = input[i].split(" ").map(Number);
    kth(n, k);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
5 2
5 1`);
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
