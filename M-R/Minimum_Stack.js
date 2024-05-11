function runProgram(input) {
    var arr = input.trim().split('\n')
    var out = [];
    var min = 9999999999999999;
    var temp = [];

    for (var i = 1; i < arr.length; i++) {
        let conditon = arr[i].trim().split(" ")
        if (conditon[0] == 'push') {
            out.push(Number(conditon[1]))
            if (Number(conditon[1]) < min) {
                temp.push(Number(conditon[1]));
                min = temp[temp.length - 1]
            }
        } else if (conditon[0] == "pop") {
            if (out[out.length - 1] == temp[temp.length - 1]) {
                out.pop();
                temp.pop();
                min = temp[temp.length - 1]
            } else {
                out.pop();
            }
        } else if (conditon[0] == "getMin") {
            console.log(min)
        }

    }


}

if (process.env.USERNAME === 'Mukesh') {
    runProgram(`8
  push 5
  push 3
  push 1
  getMin
  pop
  getMin
  pop
  getMin`);
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