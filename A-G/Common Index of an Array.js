function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr1 = input[line++].trim().split(" ").map(Number);
        let m = +(input[line++]);
        let arr2 = input[line++].trim().split(" ").map(Number);
        let obj1 = {}
        let obj2 = {}
        for (let i = 0; i < n; i++){
            if (obj1[arr1[i]] == undefined) {
                obj1[arr1[i]]=1
            } else {
                obj1[arr1[i]]+=1
            }
        }
            for (let i = 0; i < m; i++) {
              if (obj2[arr2[i]] == undefined) {
                obj2[arr2[i]] = 1;
              } else {
                obj2[arr2[i]] += 1;
              }
        }
        let a = Object.keys(obj1)
        let b = Object.keys(obj2);
        let ans=[]
        for (let i = 0; i < a.length; i++){
            if (obj1[a[i]] !== undefined && obj2[a[i]] !== undefined) {
                while(obj1[a[i]] !== 0 && obj2[a[i]] !== 0) {
                    ans.push(a[i])
                    obj1[a[i]]--
                    obj2[a[i]]--;
                }
            }
        }
        if (ans.length == 0) {
            console.log(-1);
        } else {
            console.log(ans.join(" "));
        }
        
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
6
1 3 3 4 5 6
3
3 3 5
6
2 2 3 3 9 9
8
2 2 2 4 5 5 8 8`);
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
