function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++].trim());
        let arr = input[line++].trim().split(" ").map(Number);
     
        let count=0
        for (let i = 0; i < n; i++){
            for (let j = i + 1; j < n; j++){
                if ((arr[i] + arr[j]) % 60 == 0) {
                    count++
                }
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
3
60 60 60
5
30 30 10 20 400`);
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
