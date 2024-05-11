function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let arr1 = input[line++].trim().split(".").map(Number)
        let arr2 = input[line++].trim().split(".").map(Number);
        let flag=true
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] > arr2[i]) {
                flag = true
                break
            } else if (arr1[i] < arr2[i]) {
                flag = false
                break
            } else {
                continue
            }
        }
        if (flag) {
            console.log("False");
        }
        else {
            console.log("True");
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`);
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
