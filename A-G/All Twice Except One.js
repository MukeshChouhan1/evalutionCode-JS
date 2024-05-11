function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++].trim());
        let arr = input[line++].trim().split(" ").map(Number);
      let obj = {}
      for (let i = 0; i < n; i++){
        if (obj[arr[i]] == undefined) {
          obj[arr[i]]=1
        } else {
          obj[arr[i]]+=1
        }
      }
    
      for (let key in obj) {
        if (obj[key] == 1) {
          console.log(key);
        }
      }
    }
}
if (process.env.USERNAME === "5 \n 3") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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
