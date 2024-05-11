function runProgram(input) {

    input = input.trim().split("\n");
    let test = Number(input[0].trim());
    for(let i = 1; i<input.length;i+=2){
        let size = Number(input[i].trim());
        let arr = input[i+1].trim().split(' ').map(Number);
        //console.log(arr,size)
        let res =  solve(arr,size,0,null);
        console.log(res)
    }
    
}
function solve(arr,size,curr,maxSum){

    if(curr == size) return maxSum;

    let sum = 0;
    for(let i = 0; i<size; i++){
       
            if(arr[i]>=arr[curr]){
                sum += arr[curr]
            }else{
                sum -= arr[i] 
            }  
    }
    if(maxSum!=null){
        if(maxSum<sum) maxSum = sum;
    }else{
        maxSum  = sum;
    }

   return solve(arr,size, curr+1, maxSum)
}

if (process.env.USER === "rahul") {
  runProgram(`2
  3
  2 3 1
  5
  1 6 7 1 5`);
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