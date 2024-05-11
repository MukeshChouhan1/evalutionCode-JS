function runProgram(input) {

    let [n,k] = input.trim().split(' ').map(Number);
   
    shop(n,k,1, [])

}
function shop(n,k,curr,comb){

    if(curr > n) return;

    if(comb.length == k){
        if(k>=2){
            let s = true;
            for(let i = 0; i<k-1; i++){
                if(comb[i]>=comb[i+1]) s =false
            }
            if(s) console.log(comb.join(' '));
    
        }else{
    
           
                console.log(comb.join(' '));
    
        }
    }
    for(let i = curr; i<=n; i++){
        comb.push(i);
        shop(n,k,curr+1, comb)
        comb.pop();
    }
}

if (process.env.USER === "rahul") {
  runProgram(`3 1`);
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