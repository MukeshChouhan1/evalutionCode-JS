function runProgram(input) {

    input = input.trim().split("\n");
    let test = Number(input[0]);

    for(let i = 1; i<=test; i++){
        let target = Number(input[i]) ;
        let ans =  solve(target);
        console.log(ans)
        
    }
}

function solve(t){
    if(t<0) return 0;

    if(t==0) return 1;

    return solve(t-1) + solve(t-2) + solve(t-5)
}

if (process.env.USER === "9") {
  runProgram(`1
  5`);
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