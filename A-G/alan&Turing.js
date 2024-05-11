function runProgram(input) {
  var input = input.split("\n");
  let str = input[1].split("").sort();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] > 0) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4
aman`);
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
