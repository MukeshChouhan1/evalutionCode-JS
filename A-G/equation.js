function runProgram(input) {

    input = input.trim().split('\n');
    let size = Number(input[0]);
    let arr = input[1].trim().split(' ').map(Number)

    let evenSum = 0, oddSum = 0;
    for(let i = 0; i<size; i++){
        (arr[i]%2 == 0)?evenSum+=arr[i]:oddSum+=arr[i];
    }

    let res = (2*evenSum )+ (3*oddSum);
    console.log(res);

}

if (process.env.USER === "rahul") {
  runProgram(`5
  1 2 3 4 5`);
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