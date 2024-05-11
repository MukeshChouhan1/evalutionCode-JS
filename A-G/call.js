let a = function name(hometown) {
  console.log(this.name + "is" + hometown);
};

name2 = {
  name: "Anurag",
};

let n = a.bind(name2, "munger");
