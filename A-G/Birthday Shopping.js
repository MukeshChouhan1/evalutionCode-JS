let ans=[]

function Subseq(arr, curr_arr, curr, k) {
    if (curr_arr.length == k) {
        ans.push(curr_arr.join(" "))
    }
    if (curr_arr.length == arr.length) {
        return
    }
    for (let i = curr; i < arr.length; i++){
        curr_arr.push(arr[i])
        Subseq(arr, curr_arr, i + 1, k);
        curr_arr.pop()
    }
}

function runProgram(input) {
    let [n, k] = input.trim().split(" ").map(Number);
    let arr=[]
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }
    Subseq(arr, [], 0, k)
    console.log(ans.join("\n"));

}
if (process.env.USERNAME === "huxly") {
  runProgram(`4 2`);
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
