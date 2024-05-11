//  Brute Force
// Time Complexiy = O(n);


function sort_zero_One_and_two(arr, one, two, zero) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zero.push(arr[i]);
    } else if (arr[i] == 1) {
      one.push(arr[i]);
    } else {
      two.push(arr[i]);
    }
  }
  if (zero.length > 0) {
    ans.push(zero.join(" "));
  }
  if (one.length > 0) {
    ans.push(one.join(" "));
  }
  if (two.length > 0) {
    ans.push(two.join(" "));
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let size = input[i++];
    let arr = input[i].trim().split(" ").map(Number);
    sort_zero_One_and_two(arr, [], [], []);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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
