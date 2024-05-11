function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let occ=false
    for (let i = 1; i < n - 1; i++){
        let leftSmall = true
        let rightSmall=true
        for (let j = i - 1; j >= 0; j--){
            if (arr[i] < arr[j]) {
                leftSmall = false
                break
          }
        }
        for (let j = i + 1; j < n; j++){
            if (arr[i] > arr[j]) {
                rightSmall = false
                break
          }
        }
        if (leftSmall == true && rightSmall == true) {
            occ = true
            console.log(arr[i]);
            break
      }

        
    }
    if (!occ) {
        console.log(-1);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
4 3 6 7 8`);
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
