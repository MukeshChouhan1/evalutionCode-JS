function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let n = +input[line++];
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    let TotalOcc = false;
    let negativeFlag = false;
      let positiveFlag = false;
      if (arr1[0] == 1) {
          positiveFlag=true
      } if (arr1[0] == -1) {
          negativeFlag=true
      }
      if (arr1[0] !== arr2[0]) {
           TotalOcc = true;
           console.log("NO");
      } else {
          for (let i = 1; i < n; i++) {
              //   if (arr1[0] !== arr2[0]) {
              //     TotalOcc = true;
              //     console.log("NO");
              //     break;
              //   }
    
              let occur = false;
              if (arr1[i] == arr2[i]) {
                 
                  occur = true;
                  continue;
              } else {
                  if (negativeFlag == true && positiveFlag == true) {
                              
                      break;
                  } else if (negativeFlag == true && positiveFlag == false) {
                              
                      if (arr1[i] < arr2[i]) {
                          TotalOcc = true;
                          console.log("NO");
                          break;
                      } else {
                          occur = true;
                      }
                  }
                  else if (negativeFlag == false && positiveFlag == true) {
                            //   console.log(i);
                      if (arr1[i] > arr2[i]) {
                          TotalOcc = true;
                          console.log("NO");
                          break;
                      } else {
                          occur = true;
                      }
                  } else {
                    //   console.log(arr1[i], arr2[i]);
                      TotalOcc = true;
                      console.log("NO");
                      break;
                  }
              }
              if (!occur) {
                  TotalOcc = true;
                  console.log("NO");
                  break;
              }
              if (arr1[i] == -1) {
                  negativeFlag = true;
              }
              if (arr1[i] == 1) {
                  positiveFlag = true;
              }
          }
      }
    if (TotalOcc == false) {
      console.log("YES");
    }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
3
1 -1 0
1 1 -2
3
0 1 1
0 2 2
2
1 0
1 41
2
-1 0
-1 -41
5
0 1 -1 1 -1
1 1 -1 1 -1`);
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
