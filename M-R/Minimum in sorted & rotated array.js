let ans=-1
function minimum(arr, left, right) {
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] > arr[right]) {
            left=mid+1;
        }
        else if (arr[mid] < arr[right]) {
            ans = arr[mid]
            right=mid;
        }
        else if (arr[mid] == arr[right]) {
            ans = arr[mid];
            right = mid;
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    minimum(arr, 0, n - 1);
    console.log(ans);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10
4 6 7 9 10 -1 0 1 2 3`);
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
