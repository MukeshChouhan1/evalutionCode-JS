function runProgram(input) {
    input = input.split("\n");
    var tc = input[0];
    let l = 1;
    for (let i = 0; i < tc; i++) {
        let [n, r] = input[l++].split(" ").map(Number);
        let arr = input[l++].split(" ").map(Number);
        console.log(myfun(arr, n) * r)
    }
}

function myfun(arr, n) {
    let k = 1;
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            k++;
            max = arr[i];
        }
    }
    return k;
}

if (process.env.USERNAME === "Mukesh") {
    runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}