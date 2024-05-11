function runProgram(input) {
    var input = input.split("\n");
    for (let i = 1; i <= input[0]; i++){
        let str = input[i].split("");
        console.log(str)
    }
}
if (process.env.USERNAME === "") {
  runProgram(`5
eodc
odec
code
baca
aabc`);
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
