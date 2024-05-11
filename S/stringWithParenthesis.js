// function parenthesis(inp) {
//   let stack = [];
//   var n;
//   for (let i = 0; i < inp.length; i++) {
//     n = i;
//     if (inp[i] == "[" || inp[i] == "{" || inp[i] == "("||inp[i]=="\n") {
//       stack.push(inp[i]);
//     } else {
//       while (
//         (stack[stack.length - 1] == "(" && inp[i] == ")") ||
//         (stack[stack.length - 1] == "[" && inp[i] == "]") ||
//         (stack[stack.length - 1] == "{" && inp[i] == "}")
//       ) {
//         stack.pop();
//       }
//     }
//   }

//   if (stack.length == 0) {
//     return "balanced";
//   } else {
//     return "unbalanced";
//   }
// }
// function runProgram(input) {
//     let inp = input.split("")
//     // console.log(inp)
//   console.log(parenthesis(inp));
// }

// if (process.env.USERNAME === "Anurag") {
//   runProgram(`((((((((((a))))))))))`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
let arrayIterable = [10, 20, 30, 40, 50];

for (let value of arrayIterable) {
  value++;
  console.log(value); // 11 21 31 41 51
}
console.log(
  "%c The text has blue color, with large font and red background",
  "color: blue; font-size: x-large; background: red"
);
