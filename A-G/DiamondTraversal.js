function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let n = +input[line++].trim();
    let arr = [];
    for (let i = 0; i < n; i++) {
      let crr = input[line++].trim().split(" ").map(Number);
      arr.push(crr);
    }
    let row = Math.floor(n / 2);
    let column = n - 1;
    let ans = [];

    if (n == 1) {
      console.log(arr[0][0]);
    } else {
      while (true) {
        ans.push(arr[row][column]);
        if (row == 0) {
          break;
        }
        row--;
        column--;
      }

      while (true) {
        if (column == 0) {
          break;
        }
        row++;
        column--;
        ans.push(arr[row][column]);
      }

      while (true) {
        if (row == n - 1) {
          break;
        }
        row++;
        column++;
        ans.push(arr[row][column]);
      }

      while (true) {
        if (column == n - 2) {
          break;
        }
        row--;
        column++;
        ans.push(arr[row][column]);
      }

      console.log(ans.join(" "));
    }
  }
}
if (process.env.USERNAME === "") {
  runProgram(`2
3
1 2 3
4 5 6
7 8 9
1
1`);
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
