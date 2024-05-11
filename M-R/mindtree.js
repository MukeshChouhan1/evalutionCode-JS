// function preSorted(arr) {
//     let newArr = [...arr];
//     console.log(newArr)
//   newArr.sort(function (a, b) {
//     return a - b;
//   });
//   let count = 0;

//   for (let i = 0; i < newArr.length; i++) {
//     if (arr[i] == newArr[i]) count++;
//   }

//   return count;
// }

// console.log(preSorted([5,4,3,2,1]));
// function goodpair(q1, q2) {
//   let total = 0;
//   let count = 0;
//   let i = 0;
//   while (i < q1.length && i < q2.length) {
//     total++;
//     if (q1[i] != q2[i]) count++;
//     i++;
//   }

//   return Math.floor((count / total) * 100);
// }

// console.log(goodpair("00111101", "10000001"));
