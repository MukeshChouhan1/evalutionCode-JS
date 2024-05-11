function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0])
    let line = 1
    let arr=[]
    for (let z = 0; z < cases; z++){
       arr.push(input[line++].trim())
    }
    let obj={}
    for (let i = 0; i < arr.length; i++){
        let str = arr[i].split("").sort().join("")
        if (obj[str] == undefined) {
        obj[str]=arr[i]
        } else {
            
    }
    }
    let ans = Object.values(obj)
    ans = ans.sort();
    console.log(ans.length);
    for (let i = 0; i < ans.length; i++){
        console.log(ans[i]);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
eodc
odec
code
baca
aabc`);
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
