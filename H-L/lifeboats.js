function noOfLifeboats(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left <= right) {
    count++;
    if (arr[left] + arr[right] <= k) {
      left++;
    }
    right--;
  }
  console.log(count);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let [peoples, k] = input[i++].split(" ").map(Number);
    let weights = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    noOfLifeboats(weights, k);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
4 5
3 5 3 4
4 3
1 2 2 3`);
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
