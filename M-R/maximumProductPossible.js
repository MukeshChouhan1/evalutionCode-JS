function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    i++;
    let arr = input[i].trim().split(" ").map(Number);
    let max1 = 0;
    let max2 = 0;
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max1) {
        max1 = arr[i];
        idx = i;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max2 && i !== idx) {
        max2 = arr[i];
      }
    }
    console.log(max1 * max2);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
6 
1 0 7 2 4 0
5
1 2 3 4 5
2
0 0`);
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
