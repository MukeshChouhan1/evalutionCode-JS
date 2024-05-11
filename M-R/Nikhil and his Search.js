let lowerBoundIndex = -1
let upperBoundIndex=-1

function LowerBound(arr, left, right, target) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == target) {
            lowerBoundIndex = mid
            right=mid-1;
        }
        else if (arr[mid] < target) {
            left=mid+1;
        }
        else if (arr[mid] > target) {
            right=mid-1;
        }
    }
    return lowerBoundIndex
}
function UpperBound(arr, left, right, target) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] < target) {
            left=mid+1;
        }
        else if (arr[mid] > target) {
            upperBoundIndex = mid
            right=mid-1;
        }
        else if (arr[mid] == target) {
            left=mid+1;
        }
    }
    return upperBoundIndex
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0].trim());
    let arr = input[1].trim().split(" ").map(Number);
    arr=arr.sort((a,b)=>a-b)
    let cases = +(input[2].trim())
    
    for (let z = 3; z < 3 + cases; z++){
        let [condition, target] = input[z].trim().split(" ").map(Number);
        LowerBound(arr, 0, n - 1, target)
        UpperBound(arr, 0, n - 1, target)
        if (upperBoundIndex == -1) {
            upperBoundIndex=n
        }
        if (condition == 0) {                                                //greater equal to
            if (lowerBoundIndex == -1) {
                console.log(n-upperBoundIndex);
            } else {
                console.log(n-lowerBoundIndex);
            }
        } else {                                                             //greater
            console.log(n-upperBoundIndex);
        }
        upperBoundIndex = -1
        lowerBoundIndex=-1
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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
