function countChars(str) {
  let res = "";
  let count = 0;
  let final = [];
    let j = 0;
  for (let i = 0; i < str.length; i++) {
      while (str[i] == str[j]) {
          count++;
          j++
    }
    final.push(`${str[i]}${count}`);
    i = i + count - 1;
    count = 0;
  }
  console.log(final.join(""));
}

function runProgram(input) {
  var input = input;
  countChars(input);
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`aaabbbcccaaa`);
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
