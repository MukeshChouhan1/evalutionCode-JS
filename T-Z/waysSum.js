
function runProgram(input) {

    input = Number(input.trim());
    for(let i =0; i<input; i++){
        state.push(-1);

    }
    let res = solve(input);
    console.log(res)
}
let state = []
function solve(num){
    if(num<0) return 0;
    if(num == 0) return 1;

    if(state[num-1] !=-1) return state[num-1];

    return state[num-1] = solve(num-1)+ solve(num-3) + solve(num-4)

}
if (process.env.USER === "9") {
  runProgram(`5`);
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