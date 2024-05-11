let str = "aab";

let res = [];
function palindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str[l] != str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
for (let i = 0; i < str.length; i++) {
  let sub = "";
  for (let j = i; j < str.length; j++) {
    sub += str[j];
    if (palindrome(sub)) {
      console.log(sub);
    }
  }
}
// console.log(res);
