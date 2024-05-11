function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let crr = input[line++].trim().split(" ").map(Number);
    arr.push(crr);
  }
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (top<bottom && left<right) {
    let prev = arr[top + 1][left];
    let curr;

    for (let i = left; i <= right; i++) {
      curr = arr[top][i];
      arr[top][i] = prev;
      prev = curr;
  
    }
 
    top++;

    for (let i = top; i <= bottom; i++) {
      curr = arr[i][right];
      arr[i][right] = prev;
      prev = curr;
   ;
    }
    right--;
  

    for (let i = right; i >= left; i--) {
      curr = arr[bottom][i];
      arr[bottom][i] = prev;
      prev = curr;
   ;
    }
    bottom--;


    for (let i = bottom; i >= top; i--) {
      curr = arr[i][left];
      arr[i][left] = prev;
      prev = curr;
   ;
    }
    left++;

  }

  for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
  }
}
if (process.env.USERNAME === "") {
  runProgram(`3
1 2 3
1 2 3
1 2 3
`);
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
