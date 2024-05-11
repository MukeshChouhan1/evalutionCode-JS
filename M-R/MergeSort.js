//////////////////         Merging                 /////////////////////////
function merge(leftArr, rightArr) {
    let output = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            output.push(leftArr.shift())
           
        }
        else if (leftArr[0] > rightArr[0]) {
            output.push(rightArr.shift())
        }
    }
    if (leftArr.length) {
        while (leftArr.length) {
            output.push(leftArr.shift())
        }
    } else {
      while (rightArr.length) {
        output.push(rightArr.shift());
      }
    }
    return output
}

 /////////////////////    Recursive              /////////////////
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
  return  merge(
      mergeSort(leftArr),
      mergeSort(rightArr)
    )

}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
console.log(mergeSort(arr));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
3 5 0 9 8`);
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
