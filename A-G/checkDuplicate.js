function checkDuplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > 0) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] > 1) {
      return "YES";
    }
  }
  return "NO";
}
function runProgram(input) {
  var input = input.split("\n");
  let testCases = +input[0];
  for (let i = 1; i < testCases * 2; i++) {
    let size = +input[i++];
    let arr = input[i].split(" ").map(Number);
    console.log(checkDuplicate(arr));
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
1
1
2
1 1
62
744 920 354 215 519 429 521 509 190 280 24 374 189 479 30 696 288 835 122 829 48 991 921 239 390 510 356 559 187 430 610 115 373 310 240 502 489 604 967 332 117 292 277 242 438 24 874 236 502 779 77 567 252 765 217 447 911 668 488 361 701 272`);
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
