function nick(n,start) {
    if (start == n) {
        return true
    }
    if (start > n) {
        return false
    }
    if (nick(n, start * 10) == true || nick(n, start * 20) == true) return true
    return false
}

function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0].trim())
    let line = 1;
    for (let z = 0; z < cases; z++){
        let num = +(input[line++].trim())
        let ans = nick(num, 1)
        if (ans == true) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
if (process.env.USERNAME === "") {
  runProgram(`5
1
2
10
25
200`);
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
