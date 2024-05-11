// let arr = [1, 2, 3];

// output =7;
// using Kanade's Algorithm

function maxContiguos(arr = [1, 2, 3]) {
  let sum = -Infinity;
  let curr_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    curr_sum += arr[i];
    if (curr_sum > sum) {
      sum = curr_sum;
    }
    if (curr_sum < 0) {
      curr_sum = 0;
    }
  }

  console.log(sum);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let size = +input[i++];
    let arr = input[i].trim().split(" ").map(Number);
    maxContiguos(arr);
    // console.log(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
3
1 2 3
4
-1 -1 0 1
3
2 -1 2`);
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
