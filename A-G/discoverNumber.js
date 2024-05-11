let input = `5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`;
function binarySearch(arr, n) {
  let high = 0;
  let low = arr.length - 1;
  while (high <= low) {
    let mid = Math.ceil(low + (high - low) / 2);
    // console.log(mid);
    if (arr[mid] == n) {
      return mid;
    }
    if (arr[mid] > n) {
      high = mid + 1;
    } else {
      low = mid - 1;
    }
  }
  return -1;
}
let n = input.split("\n");
// console.log(n);
let [size, querry] = n[0].split(" ").map(Number);
// console.log(querry);
let arr = n[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let low = 0;
let high = arr.length - 1;
for (let i = 2; i <= querry + 1; i++) {
  let q = +n[i];
  //   console.log(q);
}

console.log(binarySearch(arr, 10));
