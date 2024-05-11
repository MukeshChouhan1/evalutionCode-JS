//search element in a 2d array which is sorted row-wise and column-wise;
let key = 29;
let arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 40],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
// console.log(arr[0][arr.length - 1]);
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i].length - 1; j >= 0; j--) {
    if (key == arr[i][j]) {
      console.log(i, j);
    } else if (key > arr[i][j]) {
      i++;
    } else {
      j--;
    }
  }
}
