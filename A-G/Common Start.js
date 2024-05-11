function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let arr = input[line++].trim().split(" ");
    arr = arr.sort();
    let first = arr[0];
    let last = arr[arr.length - 1];
    let ans = "";
    // let left = 0
    // while (first[left] == last[left]) {
    //     ans += first[left]
    //     left++;
    // }
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== last[i]) {
        break;
      } else {
        ans += first[i];
      }
    }
    if (ans == "") {
      console.log("None");
    } else {
      console.log(ans);
    }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
rbbyrrby rbb rbbybbryb`);
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
