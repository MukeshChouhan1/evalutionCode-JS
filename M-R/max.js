let arr = [2, 5, 4, 6, 1, 7, 9, 8, 10];
let max = 0;
let stack = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    stack.push(max);
    }
    // if(stack[stack.length - 1])
    console.log(stack);
}
