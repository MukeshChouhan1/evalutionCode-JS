function runProgram(input) {

     input = input.trim().split('\n');
    let size = Number(input[0]);
    let arr = input[1].trim().split(' ').map(Number);

    mergeSort(arr,0,size-1);
    console.log(arr.join(' '));
}

function mergeSort(arr,lo,hi){
    if(lo<hi){
        let mid = Math.floor((lo+hi)/2);

        mergeSort(arr,lo,mid);
        mergeSort(arr,mid+1,hi);
        merger(arr,lo,mid,hi);

    }else{
        return
    }
}

function merger(arr,lo,mid,hi){

    let arr1=[], arr2 =[], arr3 =[];

    for(let i = lo; i<= mid; i++){
        arr1.push(arr[i]);
    }
    for(let i = mid+1; i<=hi; i++){
        arr2.push(arr[i]);
    }

    let j=0, k =0;

    while(j<arr1.length && k < arr2.length){
        if(arr1[j]>arr2[k]){
            arr3.push(arr1[j])
            j++
        }else{
            arr3.push(arr2[k])
            k++
        }
    }

    if(j != arr1.length){
        while(j!=arr1.length){
            arr3.push(arr1[j]);
            j++
        }
    }else if(k != arr2.length){
        while(k!=arr2.length){
            arr3.push(arr2[k]);
            k++
        }
    }

    let l =0,  m= lo;
    while(l<arr3.length){
        arr[m++] = arr3[l++];
    }


}

if (process.env.USER === "rahul") {
  runProgram(`5
  2 3 1 4 5`);
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