function runProgram(input) {
  input = input.trim().split("\n");
  var max_weigth = +input[0];
  var len = +input[1];
  var valueArr = input[2].trim().split(" ").map(Number);
  var weightArr = input[3].trim().split(" ").map(Number);
  let list = [];
  for (let i = 0; i < valueArr.length; i++) {
    list.push({ value: valueArr[i], weight: weightArr[i] });
  }
  list.sort(function (a, b) {
    return a.value / a.weight < b.value / b.weight
      ? 1
      : a.value / a.weight == b.value / b.weight
      ? 0
      : -1;
  });

  for (let i = 0; i < list.length; i++) {
    weightArr[i] = list[i].weight;
    valueArr[i] = list[i].value;
  }
  let max_value = 0;
  let balance = max_weigth;
  let weight_sum = 0;
  for (let i = 0; i < valueArr.length; i++) {
    if (weightArr[i] < balance) {
      max_value += valueArr[i];
      balance -= weightArr[i];
    } else {
      max_value += valueArr[i] * (balance / weightArr[i]);
      break;
    }
  }
  console.log(Math.round(max_value));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`50 
3
60 100 120 
10 20 30`);
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
