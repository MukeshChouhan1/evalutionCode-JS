// function runProgram(input) {
//   var input = input.trim().split("\n");
//   // for (let i = 1;i<input[0]*)
//   for (let i = 1; i < input.length; i++) {
//     let [size, dictionary] = input[i++].split(" ").map(Number);
//     let str = input[i++];
//     let word = input[i];
//     console.log(word);
//   }
// }
// if (process.env.USERNAME === "Anurag") {
//   runProgram(`2
// 5 4
// masai
// as
// mas
// ai
// asai
// 4 2
// hack
// hac
// ack
// `);
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

