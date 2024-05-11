function productOfArray(arr) {
  let prod = 1;
  let stack = [1];
  let stackProd = 1;
  let i = 0;
  let res = "";
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        prod = prod * arr[j];
      }
      stackProd = stackProd * arr[i];
      res += prod * stack[stack.length - 1] + " ";
      stack.push(stackProd);

      prod = 1;
    }
    console.log(res);
  
}

function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let size = input[i++];
    let arr = input[i].trim().split(" ").map(Number);
    productOfArray(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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
