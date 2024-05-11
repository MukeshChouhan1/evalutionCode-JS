let arr = [1, 2, 3, 4, 5];
let stack = [];
let res = [];
for (let i = 0; i < arr.length; i++) {
  if (stack.length == 0) {
    stack.push(arr[i]);
    res.push(-1);
  } else {
    while (stack[stack.length - 1] > arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      stack.push(arr[i]);
      res.push(-1);
    } else {
      res.push(stack[stack.length - 1]);
    }
  }
}

console.log(res);
