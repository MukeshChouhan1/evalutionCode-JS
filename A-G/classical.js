function Classical(arr) {
  let stack = [];
  if (arr[0] == "]" || arr[0] == "}" || arr[0] == ")") {
    return "not balanced";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
      stack.push(arr[i]);
    } else if (
      (arr[i] == ")" && stack[stack.length - 1] == "(") ||
      (arr[i] == "]" && stack[stack.length - 1] == "[") ||
      (arr[i] == "}" && stack[stack.length - 1] == "{")
    ) {
      stack.pop();
    }
  }
  if (stack.length == 0) {
    return("balanced");
  } else {
    return("not balanced");
  }
}

function runProgram(input) {
  var input = input.split("\n");
  let test = +input[0];
  for (let i = 1; i <= test; i++) {
    let arr = input[i].trim().split("");
    console.log(Classical(arr));
  }
}
if (process.env.USERNAME === "Anurag") {
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
