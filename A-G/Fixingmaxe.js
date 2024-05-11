function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let [n, m] = input[line++].trim().split(" ").map(Number);
        let arr=[]
        for (let i = 0; i <n ; i++){
            let crr = input[line++].trim().split("");
            arr.push(crr)
        }
        let count=0
        let row1 = n - 1;
        let column1 = 0
        while (column1<m) {
            if (arr[row1][column1] == "C") {
                break
            }
            else if (arr[row1][column1] == "R") {
                column1++
            }
            else if (arr[row1][column1] == "D") {
                count++;
                column1++
            }
        }
        let row2 = 0;
        let column2 = m - 1;

        while (row2<n) {
            if (arr[row2][column2] == "C") {
                break
            }
            else if (arr[row2][column2] == "D") {
                row2++
            }
            else if (arr[row2][column2] == "R") {
                count++
                row2++
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
3 3
RRD
DDR
RRC
1 4
DDDC
6 9
RDDDDDRRR
RRDDRRDDD
RRDRDRRDR
DDDDRDDRR
DRRDRDDDR
DDRDRRDDC
1 1
C`);
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
