// function hcf(a, b) {
//   if (a == 0) {
//     return b;
//   }
//   if (b == 0) {
//     return a;
//   }
//   if (a == b) {
//     return b;
//   }

//   if (b > a) {
//     return hcf(a, b - a);
//   }
//   return hcf(a - b, b);
// }
// function runProgram(input) {
//   var input = input.split("\n");
//   for (let i = 1; i <= input[0]; i++) {
//     let [a, b] = input[i].split(" ").map(Number);
//     console.log(hcf(a, b));
//   }
// }
// if (process.env.USERNAME === "Anurag") {
//   runProgram(`2
// 6 9
// 2 25`);
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
let answer = true;
if(answer===false){
  console.log(0)
}
else{
  console.log(10)
}