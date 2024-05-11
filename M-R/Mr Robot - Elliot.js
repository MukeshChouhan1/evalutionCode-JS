function elliot(arr) {
    if (arr.length<= 1) {
       return arr
    }
    let mid = Math.floor((arr.length+1) / 2)-1
    return arr[mid]+elliot(arr.slice(0,mid)) +elliot(arr.slice(mid+1))
}

function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++].trim());
        let arr = input[line++].trim().split("");
console.log(elliot(arr));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
  
//  Sample Output 1

// bac
// bacd
// fcabdeighjk
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
