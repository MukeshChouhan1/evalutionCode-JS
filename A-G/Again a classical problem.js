function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let stack=[]
        let arr = input[line++].trim().split("");
        let occ=false
        for (let i = 0; i < arr.length; i++){
            if (arr[0] == "}" || arr[0] == "]" || arr[0] == ")") {
                occ = true
              
                    break
             }
            if (arr[i] == "{" || arr[i] == "(" || arr[i] == "[") {
                stack.push(arr[i])
            } else {
                // console.log(stack[stack.length - 1] ,arr[i]);
                if (arr[i]=="]"&& stack[stack.length-1]=="[" ||arr[i]=="}"&& stack[stack.length-1]=="{" ||arr[i]==")"&& stack[stack.length-1]=="(" ) {
                    stack.pop()
                } else {
                    occ = true
                    break
                }
            }
        }
        if (stack.length !== 0) {
            occ=true
        }
        if (occ) {
            console.log("not balanced");
        } else {
            console.log("balanced");
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
{([])}
()
([]
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
