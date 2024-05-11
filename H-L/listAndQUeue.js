// function runProgram(input) {
//   var input = input.split("\n");
//   let queue = [];
//   for (let i = 1; i <= input[0]; i++) {
//     let [q, n] = input[i].split(" ");

//     if (q == "E") {
//       queue.push(n);
//     } else if (q == "D") {
//       if (queue.length == 0) {
//         console.log("Empty");
//       } else {
//         let front = queue[0];
//         console.log(queue.shift());
//         // queue.shift();
//       }
//     }
//   }
// }
// if (process.env.USERNAME === "Anurag") {
//   runProgram(`4
// E 2
// E 3
// D
// D`);
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
