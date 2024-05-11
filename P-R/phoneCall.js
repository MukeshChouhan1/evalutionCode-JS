let input = `1234`;
let output = "adgj";

let obj = {
  1: 0,
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: "",
};
let str = "";
let count = 0;
for (let i = 0; i < input.length; i++) {
  for (key in obj) {
    if (input[i] == key) {
    
    }
  }
}
function frequency(input, currIndex) {
  let count = 0;
  for (let i = currIndex; i < input.length; i++) {
    if (input[i] == input[currIndex]) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
