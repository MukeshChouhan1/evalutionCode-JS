function majorityElement(arr = [2, 8, 3], n = arr.length) {
  let half = Math.floor(n / 2);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > 0) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  //   console.log(obj);
  let max = 0;
  for (k in obj) {
    // console.log(half);
    if (obj[k] > half) {
      return k;
    }
  }
  return -1;
}
function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let size = +input[i++];
      let arr = input[i].trim().split(" ").map(Number);
    //   console.log(size)
    console.log(majorityElement(arr, size));
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
3
2 8 8
5
1 1 2 2 3
1
10`);
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
