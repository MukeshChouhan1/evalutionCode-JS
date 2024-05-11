function xoring(a, b, n) {
  let ans = "";


  for (let i = 0; i < n; i++) {

    if (a[i] == b[i]) ans += "0";
    else ans += "1";
  }
  return ans;
}
//https://www.geeksforgeeks.org/xor-of-two-binary-strings/