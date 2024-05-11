
function palindrome(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] != arr[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
let count = 0;
function substr(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = i; j < arr.length; j++) {
      str += arr[j];
      if (str.length == k) {
        if (!palindrome(str)) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
function runProgram(input) {
  var input = input.split("\n");
    let [size, k] = input[0].split(" ").map(Number);
    let arr = input[1].trim();
substr(arr, k);

}
if (process.env.USERNAME === "Anurag") {
  runProgram(`4 2
abcc`);
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


