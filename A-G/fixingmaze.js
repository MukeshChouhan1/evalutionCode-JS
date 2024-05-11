function runProgram(input) {
  var input = input.trim().split("\n");
  let arr = [];
  for (let i = 1; i < input[0] * 2; i++) {
    let [n, m] = input[i++].split(" ").map(Number);
    console.log(n,"n");
    for (let j = 2; j < n; j++) {
      console.log(j);
      //   arr.push(input[j].split(" ").map(Number));
      //   console.log(arr);
    }
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4
3 3
RRD
DDR
RRC
1 4
DDDC
6 9
RDDDDDRRR
RRDDRRDDD
RRDRDRRDR
DDDDRDDRR
DRRDRDDDR
DDRDRRDDC
1 1
C`);
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
