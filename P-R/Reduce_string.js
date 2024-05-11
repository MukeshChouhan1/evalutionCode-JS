function runProgram(input) {
    let arr = input.trim().split("");
    let stack = []
    let i=0
    while (arr.length > 0) {
        stack.push(arr.shift());
        // console.log(stack);
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
            stack.pop();
            stack.pop()
     }
    }
   if (stack.length == 0) {
     console.log("Empty String");
   } else {
     console.log(stack.join(""));
   }

}
if (process.env.USERNAME === "") {
  runProgram(`aaabccddd`);
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
