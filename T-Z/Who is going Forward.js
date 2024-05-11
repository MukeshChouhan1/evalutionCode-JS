function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
     k = arr[k - 1];
    let count=0
    for (let i = 0; i < n; i++){
        if (arr[i] == 0) {
            continue
        }
        if (arr[i] < k) {
            break
        }
        if (arr[i] >= k) {
            count++
        }
    }
    console.log(count);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4 2
0 0 0 0`);
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
