
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == k) {
      return mid;
    }
    if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function runProgram(input) {
  var input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let k = +input[2];
  console.log(binarySearch(arr, k));
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`5
1 2 3 5 6
4`);
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
