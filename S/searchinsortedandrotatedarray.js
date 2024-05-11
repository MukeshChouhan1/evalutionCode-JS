function searchh(arr, left, right, k) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == k) {
            return mid
        }
        if (arr[mid] >= arr[left]) {                            //this condition is only to find the increasing subarray
            if (k >= arr[left] && k <= arr[mid]) {            //this condition is to find whether the element is present in the range
                  right = mid - 1;
            } else {                                             //this condition is to find whether the element is present in the range

              left = mid + 1;
            }
        } else {                                               //this condition is only to find the increasing subarray
          if (k >= arr[mid] && k <= arr[right]) {              //this condition is to find whether the element is present in the range
            left = mid + 1;
          } else {                                            //this condition is to find whether the element is present in the range
            right = mid - 1;
          }
        }
    }
    return -1
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
console.log(searchh(arr,0,n-1,k));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 1
3 4 5 1 2`);
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
