const even = (n) => {
  return n % 2 == 0;
};

const odd = (n) => {
  return n % 2 !== 0;
};

function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 3; i++) {
    let res = [];
    let size = input[i++];
    let arr = input[i++].split(" ").map(Number);
    let type = +input[i];
    if (type == 1) {
      res.push(arr.filter(even).join(" "));
      res.push(arr.filter(odd).join(" "));
    }
    if (type == 2) {
      res.push(arr.filter(odd).join(" "));
      res.push(arr.filter(even).join(" "));
    }
    console.log(res.join(" "));
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);
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
