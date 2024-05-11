function rotateRight(arr = [1, 3, 5, 7, 9], k = 2) {
  let res = [];
  let low = 0;
  let right = arr.length - 1;
  while (low < right) {
    let temp = arr[low];
    arr[low] = arr[right];
    arr[right] = temp;
    low++;
    right--;
  }

  for (let i = k - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  for (let i = arr.length - 1; i >= k; i--) {
    res.push(arr[i]);
  }
 return res.join(" ")
}
// console.log(rotateRight());
function runProgram(input) {
  var input = input.trim().split("\n");
  for (let i = 1; i < input[0] * 2; i++) {
    let [size, k] = input[i++].split(" ").map(Number);

    let arr = input[i].trim().split(" ").map(Number);

    console.log(rotateRight(arr, k % size));
  }
}
if (process.env.USERNAME === "Anurag") {
  runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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
