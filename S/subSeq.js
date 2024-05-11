var arr = [1, 0, 7, 2];
var ans = [];

ss([], 0);

function ss(temp, n) {
  if (temp.length != 0) {
    ans.push(temp);
  }

  for (let i = n; i < arr.length; i++) {
    // temp.push(arr[i]);
    ss([...temp,arr[i]], i + 1);
  }
}
console.log(ans);

// function pro(arr) {
//     let ans = 1;

//     for (let i = 0; i < arr.length; i++) {
//         ans *= arr[i];
//     }

//     return ans
// }

// console.log(Math.max(...ans));
