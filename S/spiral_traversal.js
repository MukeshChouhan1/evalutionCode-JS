//https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let i = 0; i < n; i++) {
      let crr = input[line++].trim().split(" ").map(Number);
      arr.push(crr);
    }
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;
  
    let ans = [];
    let count = 0;
    let size = n * m;

    while (count<size) {
      if (count<size) {
        for (let i = top; i <= bottom; i++) {
          ans.push(arr[i][left]);
          count++
        }
        left++;
        
      }

      if (count<size) {
        for (let i = left; i <= right; i++) {
          ans.push(arr[bottom][i]);
           count++;
        }
        bottom--;
       
      }
      if (count<size) {
        for (let i = bottom; i >= top; i--) {
          ans.push(arr[i][right]);
           count++;
        }
        right--;
      
      }
      if (count<size) {
        for (let i = right; i >= left; i--) {
          ans.push(arr[top][i]);
           count++;
        }
        top++;
     
      }
    }
    console.log(ans.join(" "));
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
3 3
1 2 3
4 5 6
7 8 9
3 4
1 2 3 4
5 6 7 8
9 10 11 12`);
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
