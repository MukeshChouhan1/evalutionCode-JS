function palindrome(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] > 0) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let count = 0;
  let countOdd = 0;
  for (key in obj) {
    if (obj[key] % 2 == 0) {
      count++;
    } else {
      countOdd++;
    }
  }
  if (count % 2 == 1 && str.length % 2 == 0) {
    console.log("Possible!");
  } else {
    console.log("Not Possible!");
  }
}
function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    i++;

    let str = input[i];
    if (palindrome(str)) {
      console.log("Possible!");
    } else {
      console.log("Not Possible!");
    }
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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

