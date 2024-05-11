// function powerOfTwo(x) {
//   if (x == 0) {
//     return false;
//   } else {
//     while (x % 2 == 0) {
//       x = x / 2;
//     }
//     return x == 1;
//   }
// }
// console.log(powerOfTwo(24));
// using bitwise And Operator:

function powerOfTwo(x) {
 
  return x && !(x & (x - 1));
  //   console.log(x);
}
console.log(powerOfTwo(24));
// console.log(32 & 31);
