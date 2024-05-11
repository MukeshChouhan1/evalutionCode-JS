function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let n = +input[line++].trim();
    let str1 = input[line++].trim().split("");
    let str2 = input[line++].trim().split("");
    // console.log(str1,str2);
    // let ans1 = []
    // let ans2 = []
    let stack1 = [];
    let stack2 = [];
    let occ = false;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        // console.log(str1[i]);
        stack1.push(str1[i]);
        stack2.push(str2[i]);
      } else {
        //   console.log(stack1);
        if (stack2.length > 0 && stack1.length > 0) {
          // ans1.push(stack1);
          // ans2.push(stack2);
          if (stack1.reverse().join("") !== stack2.join("")) {
              occ = true;
              break
          }
          stack1 = [];
          stack2 = [];
        }
      }
    }
    // console.log(stack1, stack2);
      if (stack1.reverse().join("") !== stack2.join("")) {
        // console.log("hh");
      occ = true;
    }
    if (occ) {
      console.log("No");
    } else {
      console.log("Yes");
    }

    // console.log(ans1,ans2);
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
2
ab
ac
3
aba
aab`);
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
