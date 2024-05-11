//https://oj.masaischool.com/contest/1575/problem/02



function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let crr = input[i].trim().split(" ").map(Number);
    arr.push(crr);
  }
  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let count = 0
  let size=n*n
    let ans=[]
    while (count<size) {
       
            for (let i = left; i <= right; i++){
              ans.push(arr[top][i])
              count++
            }
            top++
      
         
            for (let i = top; i <= bottom; i++){
              ans.push(arr[i][right])
              count++;
            }
            right--;
         
        
            for (let i = right; i >= left; i--){
              ans.push(arr[bottom][i])
              count++;
            }
            bottom--;
         
       
            for (let i = bottom; i >= top; i--){
              ans.push(arr[i][left])
              count++;
            }
            left++;
           
        
    }
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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
