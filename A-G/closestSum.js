function closestSum(arr, k) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1] + arr[i + 2];
    if ( sum - 1 == k) {
      store.push(sum);
    }
  }

  // console.log(store);
  let max = 0;
  for (let i = 0; i < store.length; i++) {
    if (store[i] > max) max = store[i];
  }
  console.log(max);
}
function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let [size, k] = input[i++].trim().split(" ").map(Number);
    let arr = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    closestSum(arr, k);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
6 5
-4 1 -5 3 2 -5
3 1
0 0 0`);
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
