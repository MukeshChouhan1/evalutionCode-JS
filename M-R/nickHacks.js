function nick_Hack(input, target) {
  if (input == target) {
    return true;
  }
  if (input < target) {
    return false;
  }

  return nick_Hack(input, target * 10) || nick_Hack(input, target * 20);
}

function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input.length; i++) {
    if (nick_Hack(input[i], 1)) console.log("Yes");
    else console.log("No");
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`5
1
2
10
25
200`);
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
