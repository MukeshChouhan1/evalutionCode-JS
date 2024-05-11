function minimizeInteger(arr) {
    let n = arr;
  let ans;
  let a;
  if (n[0] == "-") {
    a = n.slice(1, n.length + 1).sort((a, b) => b - a);
    a.unshift("-");
    ans = a.join("").trim();
  } else {
    a = n.sort((a, b) => a - b);
    ans = a.join("").trim();
  }
return ans
}
function runProgram(input) {
  var input = input.trim().split("\n");
    for (let i = 1; i <= input[0]; i++) {
      let arr = input[i].trim().split("")
    console.log(minimizeInteger(arr));
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
53334121
-1002911
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
