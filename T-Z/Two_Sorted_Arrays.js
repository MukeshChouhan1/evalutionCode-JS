function getCommon(arr1, arr) {
    let arr2 = []
    for (var i = 0; i < arr.length; i++) {
        arr2.unshift(arr[i])
    }
    var common = 0;
    var i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] == arr2[j]) {
            common++;
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return common;
}



function runProgram(input) {
    var ar = input.trim().split('\n')
    for (var i = 2; i < ar.length; i = 3 + i) {
        let asArr = ar[i].trim().split(" ").map(Number)
        let disArr = ar[i + 1].trim().split(" ").map(Number)
        console.log(getCommon(asArr, disArr))

    }



}

if (process.env.USERNAME === 'Mukesh') {
    runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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