function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++].trim());
        let arr = input[line++].trim().split(" ").map(Number);
        let stack = []
        let ans=[]
        for (let i = arr.length - 1; i >= 0; i--){
            while (stack.length && arr[i] >= stack[stack.length-1]) {
                stack.pop()
            }
            if (stack.length == 0) {
    ans.push(-1)
            }
            else {
                ans.push(stack[stack.length-1])
            }
            stack.push(arr[i])
        }
        console.log(ans.reverse().join(" "));
    }
}
if (process.env.USERNAME === "") {
  runProgram(`1
4
1 3 2 4`);
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
