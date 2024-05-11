function runProgram(input) {
  var input = input.split("\n");
  let str = input[0];
  let k = +input[1];
  let res = [];
  for (let i = 0; i < str.length; i++) {
 
      let decrypted = str.charCodeAt(i) + k;
      res.push(String.fromCharCode(decrypted));
      
    
  }
  console.log(res.join(""));
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`All-convoYs-9-be:Alert1.
4`);
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
