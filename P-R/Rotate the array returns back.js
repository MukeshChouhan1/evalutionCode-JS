function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let [n, k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        let ans = []
        for (let i = 0; i < n; i++){
            let newIndex = (i + k) % n
            ans[newIndex] = arr[i]           
        }
        console.log(ans);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);
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
