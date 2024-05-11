let input = `4
1 2 3 4
3
0 5
1 3
0 3`
  .trim()
  .split("\n");
let arr = input[1].trim().split(" ").map(Number);
let queries = +input[2];
for (let i = 3; i < queries * 2; i++) {
  let [queryType, x] = input[i].split(" ").map(Number);
  console.log(queryType, x);
}

function NikhilAndSearch(arr, queryType) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
      let middle = Math.floor(low + (high - low) / 2);
      if(arr[middle])

  }
}
