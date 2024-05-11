// Brute Force Approach:----
// We Will find the Subsequence of the elements of arr.
// And then we will find for each pair which is divisible by 60 and then increase the Count.
// Time Complexity(O(n^2));

function alexAndOcd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
    
      if (sum % 60 == 0) {
        count++;
      }
    }
  }
  console.log(count);
}

function runProgram(input) {
  var input = input.split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    i++;
    let arr = input[i].split(" ").map(Number);
    alexAndOcd(arr);
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`2
3
60 60 60
5
30 30 10 20 400`);
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
