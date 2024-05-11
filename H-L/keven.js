let count = 0;
function runProgram(input) {

    input = input.trim().split("\n");

    let test= Number(input[0]);

    for(let i = 1; i<input.length; i+=2){
        let [n,k] = input[i].trim().split(' ').map(Number)

        let arr = input[i+1].trim().split(' ').map(Number);
        //console.log(arr)
       // console.log(count)
        solve(arr,n,[],0 ,k);

        console.log(count);
        count = 0;

    }
}

function solve(arr,size,sb,curr,k){

    if(curr == size) {

        if(sb.length>0){

            let noOfeven = 0;
            for(let i = 0; i<sb.length; i++){
                if(sb[i]%2==0) noOfeven +=1
            }

            if(noOfeven >= k){ 
               // console.log(sb)
                count +=1}
        }
    }else{
        solve(arr,size,sb,curr+1,k);
        sb.push(arr[curr]);
        solve(arr,size,sb,curr+1,k);
        sb.pop();
    }
    return;
}

if (process.env.USER === "rahul") {
  runProgram(`2
  4 2
  4 3 2 1
  2 1
  2 3`);
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