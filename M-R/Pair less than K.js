function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++].trim());
        let arr = input[line++].trim().split(" ").map(Number);
        let k = +(input[line++].trim())
        arr = arr.sort((a, b) => a - b);
        let left = 0;
        let right = n - 1
        let max=-1
        while (left < right) {
            let sum = arr[left] + arr[right]
            if (sum < k) {
                left++;
                if (max < sum) {
                    max=sum
                }
            } else {
                right--;
            }
        }
        console.log(max);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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
