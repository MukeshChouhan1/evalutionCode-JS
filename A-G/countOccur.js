function runProgram(input) {

    input = input.trim().split("\n");

    let test= Number(input[0]);

    for(let i = 1; i<input.length; i+=2){
        let size = Number(input[i]);

        let arr = input[i+1].trim().split('').map(Number);
        let sample = [0,0,0,0,0,0,0,0,0,0];
         solve(arr,size,sample,0)
        console.log(sample.join(' '));

    }
}

function solve(arr,size,sample,curr){
    if(curr == size) return;

    for(let i =0; i< 10; i++){
        if(i == arr[curr]) sample[sample.length-(i+1)] +=1
    }
    solve(arr,size,sample,curr+1)
}



if (process.env.USER === "rahul") {
  runProgram(`2
  5
  21321
  6
  235452`);
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