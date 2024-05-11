function runProgram(input) {
 let n=input;
 function fact(n) {
    if (n == 1)
        return 0;
    return fact(n - 1) + Math.log(n);
}
console.log( fact(n).toFixed(4));
}

if (process.env.USERNAME === "1.7918`") {
	runProgram(`3`);
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