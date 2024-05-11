function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let arr = input[line++].trim().split("");
         let minus = false     
        if (arr[0] === "-") {
            arr.shift()
            minus=true
        }
        if (minus) {
            arr.sort((a, b) => b - a)
            // while (arr[0] == 0) {
            //     arr.push(arr.shift())
            // }
            arr.unshift("-")
            console.log(arr.join(""));
        } else {
            arr.sort((a, b) => a - b)
            let stack=[]
            while (arr[0] == 0) {
                stack.push(arr.shift())
            }
            let a = arr.shift()
            while (stack.length) {
                arr.unshift(stack.pop())
            }
            arr.unshift(a)
            console.log(arr.join(""));
      }
        
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
5333412100
-1002911
`);
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
