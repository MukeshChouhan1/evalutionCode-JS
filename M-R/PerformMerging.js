function runProgram(input) {
    input = input.split("\n");
    let n = input[0];
    let l = 1;
    let arr1 = input[l++].split(" ").map(Number);
    let arr2 = input[l].split(" ").map(Number);
    PerformMerg(n, arr1, arr2);
}

function PerformMerg(n, a, b) {
    var result = [];
    var ai = 0;
    var bi = 0;
    while (true) {
        if (ai < a.length && bi < b.length) {
            if (a[ai] < b[bi]) {
                result.push(a[ai]);
                ai++;
            } else if (a[ai] > b[bi]) {
                result.push(b[bi]);
                bi++;
            } else {
                result.push(a[ai]);
                result.push(b[bi]);
                ai++;
                bi++;
            }
        } else if (ai < a.length) {
            result.push.apply(result, a.slice(ai, a.length));
            break;
        } else if (bi < b.length) {
            result.push.apply(result, b.slice(bi, b.length));
            break;
        } else {
            break;
        }
    }

    let bag = "";
    for (let i = 0; i < result.length; i++) {
        bag = bag + result[i] + " ";
    }
    console.log(bag);
}

if (process.env.USERNAME === "1 2 4 5 6 7 8 9") {
    runProgram(`4
1 5 7 9
2 4 6 8`);
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