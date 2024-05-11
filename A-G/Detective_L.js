function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let [n, m] = input[line++].trim().split(" ").map(Number);
        let arr = []
        for (let i = 0; i < n; i++){
            let crr = input[line++].trim().split(" ").map(Number);
            arr.push(crr);

      }
      let ans=[]
      let row = 0;
      let column = 0;
      let colref=0
      while (n>0) {
        while (column < m) {
          ans.push(arr[row][column])
          if (row < n - 1) {
            row++
          }
          else {
            column++
          }
        }
        row = 0
        colref++
        column=colref
        n--
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
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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
