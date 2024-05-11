function isBalence(str) {
    //  console.log(str+" "+ str.length)
    let a = [];
    let pointer = -1;
    let obj = {
        ")": "(",
        "]": '[',
        '}': '{'
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == '[' || str[i] == '{') {
            a.push(str[i])
            pointer++;
            // console.log("1 => pushed elem and pointer is => "+pointer)
        }

        if (str[i] == ')' || str[i] == ']' || str[i] == '}') {
            if (pointer == -1) {
                // console.log("2 => arr is empty => "+pointer)
                return "not balanced"
            } else {
                if (a[pointer] == obj[str[i]]) {

                    a.pop();
                    pointer--;

                } else {
                    return 'not balanced'
                }
            }
        }
    }
    if (a.length == 0) {
        return 'balanced'
    } else {
        return 'not balanced'
    }
}




function runProgram(input) {
    var arr = input.trim().split('\n')
    for (var i = 1; i < arr.length; i++) {
        let ar = arr[i].trim()
        console.log(isBalence(ar))
    }

}

if (process.env.USERNAME === 'Mukesh') {
    runProgram(`3
  {([])}
  ()
  ([]`);
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