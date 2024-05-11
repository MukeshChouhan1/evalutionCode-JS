let input = `92
14
80
72
-1`.split("\n");
for (let i = 0; i < input.length; i++) {
  let int = input[i].split("");
  let int1 = +input[i];
  if (int[int.length - 1] == 2) {
    console.log(-2);
  }
  if (int1 % 8 == 0) {
    console.log(-3);
    }
    if (int[int.length - 1] == 2 && int1 % 8 == 0) {
        console.log(-7)
    }
}
